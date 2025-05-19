import React from "react";
import WrapperBtn from "../common/wrapperBtn/WrapperBtn";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Banner() {
    return (
        <div className="banner  flex items-center justify-center flex-col gap-4 text-center py-30">
            <span className="text-[var(--main-color)] uppercase text-md">Senior Frontend Developer</span>
            <h1 className="uppercase font-antonio xl:text-8xl md:text-6xl text-4xl">Yousef El-khawanki</h1>
            <div className="banner-btns mt-8 flex justify-center flex-col items-center gap-8">
                <WrapperBtn title="Download CV" icon={<IoCloudDownloadOutline size={16} />} isDownload />
                <div className="banner-btns-icons flex items-center gap-4 flex-wrap">
                    <a href="" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaInstagram size={14} />
                    </a>
                    <a href="" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaGithub size={14} />
                    </a>
                    <a href="" className="icon w-16 h-8 rounded-full bg-[var(--dark-secondary-color)] flex items-center justify-center hover:bg-[var(--main-color)] duration-300">
                        <FaYoutube size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
