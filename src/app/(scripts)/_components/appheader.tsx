"use client"

import Link from "next/link";
import ThemeToggle from "./themetoggle";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
]

export default function AppHeader() {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                     <Image src={"/icon.png"} alt="Torsumethkk's profile image" width={50} height={50} priority/>
                </Link>
                <h1 className="text-[30px]">Torsumethkk</h1>
            </div>
            <div className="flex items-center space-x-8">
                <nav className="flex space-x-8 text-[24px]">
                    {navLinks.map(link => {
                        const isActive = pathname === link.href

                        return (
                            <Link className={`${isActive ? "active-link" : ""} duration-300`} key={link.name} href={link.href}>{link.name}</Link>
                        )
                    })}
                </nav>
                <ThemeToggle/>
            </div>
        </div>
    )
}