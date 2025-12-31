"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Menu = () => {
    const pathname = usePathname();
    return (
        <div>

        <h2>{pathname}</h2>
            <ul>
                <li><Link href="/" className={pathname === "/" ? "active-link" : "notactive-link"}>Home</Link></li>
                <li><Link href={{ pathname:'/about',query:{computer:"laptop",quantity:10}}} className={pathname === "/about" ? "active-link" : "notactive-link"}>About</Link></li>
                <li><Link href="/api" className={pathname === "/api" ? "active-link" : "notactive-link"}>API</Link></li>
                <li><Link href="/api2" className={pathname === "/api2" ? "active-link" : "notactive-link"}>API2</Link></li>
                <li><Link href={{ pathname:'/profile',query:{profile_id:10,name:"parag"}}} className={pathname === "/profile" ? "active-link" : "notactive-link"}>Profile</Link></li>
            </ul>
        </div>
    );
};

export default Menu;