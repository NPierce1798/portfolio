'use client';

import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { supabaseClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { user, loading } = useAuth();
    const [signingOut, setSigningOut] = useState(false);
    const supabase = supabaseClient();
    const router = useRouter();

    const handleSignout = async () => {
        setSigningOut(true);
        try {
            // Client-side signout - this will trigger your AuthContext
            await supabase.auth.signOut();
            // The AuthContext will handle the state change automatically
            router.push('/');
        } catch (error) {
            console.error('Signout error:', error);
        } finally {
            setSigningOut(false);
        }
    };

    if (loading) {
        console.log('Loading user...');
        return (
            <div className="flex flex-row w-full p-4 border-b-2 border-gray-500 bg-gray-900">
                <Link href='/' className="text-4xl font-bold my-auto hover:text-blue-400 cursor-pointer transition">Pierce</Link>
                <div className="flex flex-row items-center font-bold mr-0 ml-auto my-auto">
                    <div className="rounded-lg bg-gray-600 p-2">Loading...</div>
                </div>
            </div>
        );
    }

    console.log('Current user:', user);

    return (
        <div className="flex flex-row w-full p-4 border-b-2 border-gray-500 bg-gray-900">
            <Link href='/' className="text-4xl font-bold my-auto hover:text-blue-400 cursor-pointer transition">Pierce</Link>

            <div className="flex flex-row items-center font-bold mr-0 ml-auto my-auto">
                {user ? (
                    <div className="flex flex-row items-center border-l-2 border-gray-600 p-2">
                        <svg width="12" height="12" className="inline">
                            <circle cx="6" cy="6" r="5" className="fill-green-400" />
                        </svg>
                        <p className="text-gray-400 mx-2">{user.email}</p>
                        <button 
                            onClick={handleSignout}
                            disabled={signingOut}
                            className="rounded-lg bg-red-600 p-2 cursor-pointer hover:bg-red-800 disabled:opacity-50"
                        >
                            {signingOut ? 'Signing out...' : 'Logout'}
                        </button>
                    </div>
                ) : (
                    <Link href='/login' className="rounded-lg bg-blue-600 p-2 cursor-pointer hover:bg-blue-800">Login</Link>
                )}
            </div>
        </div>
    );
}