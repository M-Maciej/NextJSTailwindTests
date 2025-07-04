import Link from "next/link"
import React from "react"
import ToggleDarkMode from "./ToggleDarkMode"

const Nav = () => {
    return (
        <nav className="flex flex-col items-center border-b mb-5 py-5 bg-secondary">
            <div className="flex justify-between max-w-5xl w-full">
                <div className="flex items-center gap-5">
                    <Link href="/">Dashboard</Link>
                    <Link href="/">Users</Link>
                    <Link href="/">Tickets</Link>
                </div>
                <div className="flex items-center gap-5">
                    <Link href="/">Login</Link>
                    <ToggleDarkMode/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
