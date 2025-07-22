'use client';

import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { signout } from "../login/actions";

export default function Navbar() {
    const { user, loading } = useAuth();
    if (loading) {
        console.log('Loading user...')
    }
    console.log(user)

    return (
        <div className="flex flex-row w-full p-4 border-b-2 border-gray-500 bg-gray-900">

            <Link href='/' className="text-4xl font-bold my-auto hover:text-blue-400 cursor-pointer transition">Pierce</Link>

            <div className="flex flex-row items-center font-bold mr-0 ml-auto my-auto">
                
                {/* <Link href='/dashboard' className="text-md hover:text-green-500 cursor-pointer mx-6">Dashboard</Link> */}
                {user? (
                    <div className="flex flex-row items-center border-l-2 border-gray-600 p-2">
                        <svg width="12" height="12" className="inline">
                            <circle cx="6" cy="6" r="5" className="fill-green-400" />
                        </svg>
                        <p className="text-gray-400 mx-2">{user.email ?? null}</p>
                        <button onClick={() => signout()} className="rounded-lg bg-red-600 p-2 cursor-pointer hover:bg-red-800">Logout</button>
                    </div>
                ) : (
                    <Link href='/login' className="rounded-lg bg-blue-600 p-2 cursor-pointer hover:bg-blue-800">Login</Link>
                )}

            </div>
        </div>
    )
}