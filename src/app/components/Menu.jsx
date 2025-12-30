import Link from 'next/link';
import React from 'react';
const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/api">API</Link></li>
                <li><Link href="/api2">API2</Link></li>
                <li><Link href="/profile">Profile</Link></li>
            </ul>
        </div>
    );
};

export default Menu;