"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div 
            className={`toggle hover:scale-[1.1] hover:rotate-[-20deg] duration-300 text-[30px]`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? 
                <FaRegMoon/>
            :
                <FaRegSun/>
            }
        </div>
    )
}