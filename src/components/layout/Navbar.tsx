import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";

export default function Navbar() {
    return (
        <header className="header header-blur xl:w-[80%] w-[95%] mx-auto fixed z-50 left-1/2 tranform -translate-x-1/2 top-4 px-8 py-6 rounded-full">
            <h1 className="uppercase font-antonio text-md flex items-center gap-1">
                Yousef <VscVerifiedFilled size={16} className="text-[var(--main-color)]" />
            </h1>
        </header>
    );
}
