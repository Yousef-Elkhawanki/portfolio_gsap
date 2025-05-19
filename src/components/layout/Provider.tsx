import React from "react";
import Navbar from "./Navbar";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
