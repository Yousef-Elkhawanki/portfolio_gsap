import React from "react";
import WrapperBtn from "../common/wrapperBtn/WrapperBtn";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Banner() {
    return (
        <div className="banner  flex items-center justify-center flex-col gap-4 text-center pt-30">
            <span className="text-[var(--main-color)] uppercase text-md animated-text">Senior Frontend Developer</span>
            <h1 className="uppercase font-antonio xl:text-8xl md:text-6xl text-4xl animated-text">Yousef El-khawanki</h1>
            <div className="banner-btns mt-8 flex justify-center flex-col items-center gap-8 animated-text">
                <WrapperBtn title="Download CV" icon={<IoCloudDownloadOutline size={16} />} isDownload />
                <div className="banner-btns-icons flex items-center gap-4 flex-wrap">
                    <a href="https://www.facebook.com/yusuf.mhamed.9/" target="_blank" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="https://www.instagram.com/itsyousef_97" target="_blank" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaInstagram size={14} />
                    </a>
                    <a href="https://github.com/Yousef-Elkhawanki" target="_blank" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaGithub size={14} />
                    </a>
                    <a href="https://www.youtube.com/@JoeProgramming" target="_blank" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaYoutube size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
