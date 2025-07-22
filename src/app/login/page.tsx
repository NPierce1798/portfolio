'use client';

import { useState } from "react";
import { login, signup } from './actions';

export default function Login() {
    // const [user, setUser] = useState<User | null>(null);
    const [register, setRegister] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleRegisterToggle = () => {
        setRegister(!register);
        console.log('Register', register);
    }

    const handleSignupSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== verifyPassword) {
            setError("Passwords do not match")
            return
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        signup(formData)
    }

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        login(formData);
    }

    return (
        <>
            { register ? (
                <div className="flex flex-col w-full items-center">
                    <h2 className="text-blue-300 font-bold text-2xl my-6">Login or Signup</h2>

                    <div className="w-100 flex flex-col items-center border-2 border-gray-500 rounded-lg p-6 hover:border-blue-300 transition">
                        <p className="font-bold text-xl text-blue-400">Register</p>

                        <form onSubmit={handleSignupSubmit} className="flex flex-col self-start m-auto w-full">
                            <input onChange={(e) => setEmail(e.target.value)} required id="email" type="email" placeholder="Enter Email" className="my-2 border-1 border-gray-200 p-2 " />
                            <input onChange={(e) => setPassword(e.target.value)} required id="password" type="password" placeholder="Enter Password" className="my-2 border-1 border-gray-200 p-2 " />
                            <input onChange={(e) => setVerifyPassword(e.target.value)} required id="verifyPassword" type="password" placeholder="Verify Password" className="my-2 border-1 border-gray-200 p-2 " />
                            <button type="submit" className="my-2 bg-blue-600 rounded p-2 font-bold text-lg hover:bg-blue-800 cursor-pointer" >Login</button>
                        </form>
                        <p className="text-red-500">{error}</p>
                        <p>Already have an account? <button className="text-blue-300 cursor-pointer hover:underline" formAction={signup}>Login</button> here.</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full items-center">
                    <h2 className="text-blue-300 font-bold text-2xl my-6">Login or Signup</h2>

                    <div className="w-100 flex flex-col items-center border-2 border-gray-500 rounded-lg p-6 hover:border-blue-300 transition">
                        <p className="font-bold text-xl text-blue-400">Login</p>

                        <form onSubmit={handleLoginSubmit} className="flex flex-col self-start m-auto w-full">
                            <input required onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Enter Email" className="my-2 border-1 border-gray-200 p-2 " />
                            <input required onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Enter Password" className="my-2 border-1 border-gray-200 p-2 " />
                            <button type="submit" className="my-2 bg-blue-600 rounded p-2 font-bold text-lg hover:bg-blue-800 cursor-pointer">Login</button>
                        </form>
                        <p>Don&apos;t have an account? <button className="text-blue-300 cursor-pointer hover:underline" onClick={handleRegisterToggle}>Register</button> here to create one.</p>
                    </div>
                </div>
            )}
        
        </>
    )
}