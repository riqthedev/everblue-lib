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


export default function Header() {
    return (
        <div className="header">
            <ul>
                <li><a href="#"> Browse Catalog</a></li>
                <li><a href="#"> Search Catalog</a></li>
                <li><a href="#"> Basket</a></li>
            </ul>
        </div>

    )
}

