import { ChevronLeft, ChevronRight, Minus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hoveringImage, setHoveringImage] = useState(false);
    const [hoveringVideo, setHoveringVideo] = useState(false);
    const [hoveringSwiper, setHoveringSwiper] = useState(false);
    const [hoveringHeader, setHoveringHeader] = useState(false);

    useEffect(() => {
        let mouseX = 0,
            mouseY = 0;
        let currentX = 0,
            currentY = 0;
        const speed = 0.1;

        const handleMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const target = e.target as HTMLElement;
            let el: HTMLElement | null = target;

            // Reset all
            let imageHover = false;
            let videoHover = false;
            let swiperHover = false;
            let headerHover = false;

            while (el && el !== document.body) {
                const classList = Array.from(el.classList).map((cls) => cls.toLowerCase());

                if (classList.some((cls) => cls.includes("image_view"))) {
                    imageHover = true;
                    break; // stop here if matched
                }

                if (classList.some((cls) => cls.includes("video_view"))) {
                    videoHover = true;
                    break; // stop here if matched
                }

                if (classList.some((cls) => cls.includes("swiper"))) {
                    swiperHover = true;
                    break; // stop here if matched
                }

                if (classList.some((cls) => cls.includes("header"))) {
                    headerHover = true;
                    break; // stop here if matched
                }

                el = el.parentElement;
            }

            // Only one of them will be true
            setHoveringImage(imageHover);
            setHoveringVideo(videoHover);
            setHoveringSwiper(swiperHover);
            setHoveringHeader(headerHover);
        };

        const animateCursor = () => {
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${currentX}px`;
                cursorRef.current.style.top = `${currentY}px`;
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener("mousemove", handleMove);
        animateCursor();

        return () => {
            document.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom_cursor fixed left-0 top-0 
                drop-shadow-2xl
                translate-x-[-50%] translate-y-[-50%] 
                xl:flex hidden items-center justify-center z-[100] 
                text-sm
                shadow-2xl
                bg-white
                ${hoveringImage || hoveringVideo || hoveringSwiper ? "w-26 h-26  text-black" : " w-2 h-2"} 
                rounded-full pointer-events-none transition-all duration-150 ease-out`}>
            {hoveringImage && (
                <span className=" font-antonio text-center uppercase text-balance">
                    View <br /> 
                </span>
            )}
            {hoveringVideo && <span className=" font-antonio text-center uppercase">Play</span>}
            {hoveringSwiper && (
                <span className="text-sm font-semibold flex items-center gap-0">
                    <ChevronLeft size={20} />
                    <Minus size={20} className="rotate-90" />
                    <ChevronRight size={20} />
                </span>
            )}
        </div>
    );
}
