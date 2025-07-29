'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/utils/supabase/client";

export default function Login() {
    const router = useRouter();
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const supabase = supabaseClient();

    const handleRegisterToggle = () => {
        setRegister(!register);
        setError(null); // Clear errors when switching
        console.log('Register', register);
    }

    const handleSignupSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== verifyPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                return;
            }

            // Success! Check if user needs email confirmation
            if (data.user && !data.user.email_confirmed_at) {
                setError("Please check your email for confirmation link");
            } else {
                // User is logged in, AuthContext will update automatically
                router.push('/');
            }
        } catch (err) {
            setError('An unexpected error occurred');
            console.error('Signup error:', err);
        } finally {
            setLoading(false);
        }
    }

    const handleLoginSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                return;
            }

            // Success! AuthContext will automatically update
            router.push('/');
        } catch (err) {
            setError('An unexpected error occurred');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {register ? (
                <div className="flex flex-col w-full items-center">
                    <h2 className="text-blue-300 font-bold text-2xl my-6">Login or Signup</h2>

                    <div className="w-100 flex flex-col items-center border-2 border-gray-500 rounded-lg p-6 hover:border-blue-300 transition">
                        <p className="font-bold text-xl text-blue-400">Register</p>

                        <form onSubmit={handleSignupSubmit} className="flex flex-col self-start m-auto w-full">
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                id="email" 
                                type="email" 
                                placeholder="Enter Email" 
                                className="my-2 border-1 border-gray-200 p-2 text-black" 
                                disabled={loading}
                                value={email}
                            />
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                                id="password" 
                                type="password" 
                                placeholder="Enter Password" 
                                className="my-2 border-1 border-gray-200 p-2 text-black" 
                                disabled={loading}
                                value={password}
                            />
                            <input 
                                onChange={(e) => setVerifyPassword(e.target.value)} 
                                required 
                                id="verifyPassword" 
                                type="password" 
                                placeholder="Verify Password" 
                                className="my-2 border-1 border-gray-200 p-2 text-black" 
                                disabled={loading}
                                value={verifyPassword}
                            />
                            <button 
                                type="submit" 
                                className="my-2 bg-blue-600 rounded p-2 font-bold text-lg hover:bg-blue-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
                                disabled={loading}
                            >
                                {loading ? 'Creating Account...' : 'Register'}
                            </button>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <p className="mt-2">Already have an account? <button className="text-blue-300 cursor-pointer hover:underline" onClick={handleRegisterToggle} disabled={loading}>Login</button> here.</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full items-center">
                    <h2 className="text-blue-300 font-bold text-2xl my-6">Login or Signup</h2>

                    <div className="w-100 flex flex-col items-center border-2 border-gray-500 rounded-lg p-6 hover:border-blue-300 transition">
                        <p className="font-bold text-xl text-blue-400">Login</p>

                        <form onSubmit={handleLoginSubmit} className="flex flex-col self-start m-auto w-full">
                            <input 
                                required 
                                onChange={(e) => setEmail(e.target.value)} 
                                id="email" 
                                type="email" 
                                placeholder="Enter Email" 
                                className="my-2 border-1 border-gray-200 p-2 text-black" 
                                disabled={loading}
                                value={email}
                            />
                            <input 
                                required 
                                onChange={(e) => setPassword(e.target.value)} 
                                id="password" 
                                type="password" 
                                placeholder="Enter Password" 
                                className="my-2 border-1 border-gray-200 p-2 text-black" 
                                disabled={loading}
                                value={password}
                            />
                            <button 
                                type="submit" 
                                className="my-2 bg-blue-600 rounded p-2 font-bold text-lg hover:bg-blue-800 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <p className="mt-2">Don&apos;t have an account? <button className="text-blue-300 cursor-pointer hover:underline" onClick={handleRegisterToggle} disabled={loading}>Register</button> here to create one.</p>
                    </div>
                </div>
            )}
        </>
    )
}