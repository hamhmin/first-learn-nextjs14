"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation () {
    const path = usePathname();
    const [count, setCount] = useState(0);
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? " ㅁ" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? " ㅁ" : ""}
                </li>
                {/* <li>
                    <Link href="/movies">Movies</Link> {path === "/movies" ? " ㅁ" : ""}
                </li> */}
                {/* <li>
                    <Link href="/not">not</Link>{path === "/not" ? " ㅁ" : ""}
                </li> */}
                {/* <li><button onClick={() => setCount(c => c+12)}>{count}</button></li> */}
            </ul>
        </nav>
    )
}