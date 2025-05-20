import gsap from "gsap";
import React, { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function Navbar() {
    const [showHeader, setShowHeader] = React.useState(false);
    const headerRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!headerRef.current) return;

        let lastScroll = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrollingDown = currentScroll > lastScroll;

                    if (currentScroll < 50) {
                        setShowHeader(false);
                        gsap.to(headerRef.current, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            ease: "power3.out",
                        });
                    } else {
                        if (isScrollingDown) {
                            gsap.to(headerRef.current, {
                                y: -100,
                                opacity: 0,
                                duration: 1,
                                ease: "power3.out",
                            });
                        } else {
                            setShowHeader(true);
                            gsap.to(headerRef.current, {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                ease: "power3.out",
                            });
                        }
                    }

                    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headerRef]);
    return (
        <header ref={headerRef} className="header header-blur xl:w-[80%] w-[95%] mx-auto fixed z-50 left-1/2 tranform -translate-x-1/2 top-4 px-8 py-6 rounded-full flex items-center justify-between">
            <h1 className="uppercase font-antonio text-md flex items-center gap-1">
                Yousef <VscVerifiedFilled size={16} className="text-[var(--main-color)]" />
            </h1>
            <a href="https://wa.me/+201113860126" className="hover:text-[var(--main-color)] duration-300">
                <FaWhatsapp size={24} />
            </a>
        </header>
    );
}
