import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLink = ({ isActive }) =>
        `rounded-lg px-4 py-2 text-sm font-medium transition ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`;

    return (
        <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600"
                >
                    GANPAT UNIVERSITY
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-2 md:flex">

                    <NavLink to="/" className={navLink}>
                        Home
                    </NavLink>

                    <NavLink to="/dashboard" className={navLink}>
                        Dashboard
                    </NavLink>

                    <NavLink to="/about" className={navLink}>
                        About
                    </NavLink>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-2xl md:hidden"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t bg-white px-6 py-4 md:hidden">

                    <div className="flex flex-col gap-2">

                        <NavLink
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className={navLink}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            onClick={() => setMenuOpen(false)}
                            className={navLink}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className={navLink}
                        >
                            About
                        </NavLink>

                        <button className="mt-2 rounded-lg bg-gray-900 px-5 py-2 text-white">
                            Login
                        </button>

                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar