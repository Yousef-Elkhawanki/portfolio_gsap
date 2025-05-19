import clsx from "clsx";
import React from "react";

interface IWrapperBtn {
    title: string;
    icon?: React.ReactNode;
    isDownload?: boolean;
}
export default function WrapperBtn({ title, icon, isDownload }: IWrapperBtn) {
    const handleClick = () => {
        if (isDownload) {
            const link = document.createElement("a");
            link.href = "/cv.pdf";
            link.download = "cv.pdf";
            link.click();
        } else {
            return;
        }
    };
    return (
        <button
            onClick={handleClick}
            className={clsx(
                "wrapper-btn bg-[var(--dark-secondary-color)] p-2 px-4 rounded-full shadow-2xl text-xs font-medium flex items-center gap-2 uppercase ",
                {
                    "cursor-pointer hover:bg-[var(--main-color)] duration-300": isDownload,
                },
            )}>
            <span>{title}</span>
            <span>{icon}</span>
        </button>
    );
}
