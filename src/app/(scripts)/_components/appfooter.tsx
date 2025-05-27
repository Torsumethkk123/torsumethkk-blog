"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Docs", href: "/docs" },
]

export default function AppFooter() {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center py-4">
            Copyright © 2025 Torsumethkk
            <div className="space-x-4">
                {navLinks.map(link => {
                    const isActive = pathname === link.href

                    return (
                        <Link className={`${isActive ? "active-link" : ""} duration-300`} key={link.name} href={link.href}>{link.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}