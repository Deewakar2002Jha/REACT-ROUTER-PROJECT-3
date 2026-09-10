import React from 'react'
import { NavLink, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>

            <p className="mt-3 text-gray-600">
                Welcome to your dashboard.
            </p>

            {/* Nested Navigation */}
            <div className="mt-8 flex gap-4">
                <NavLink
                    to="profile"
                    className={({ isActive }) =>
                        `rounded-lg px-5 py-2 ${isActive
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`
                    }
                >
                    Profile
                </NavLink>

                <NavLink
                    to="settings"
                    className={({ isActive }) =>
                        `rounded-lg px-5 py-2 ${isActive
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`
                    }
                >
                    Settings
                </NavLink>
            </div>

            {/* Child route appears here */}
            <div className="mt-6 rounded-xl bg-white p-6 shadow">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard