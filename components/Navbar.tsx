"use client"
import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#"> EverBlue</a></li>
                <li><a href="#"> My Account</a></li>
            </ul>
        </div>

    )
}

