'use client';

import React, { useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabaseClient } from '@/utils/supabase/client';

// 1. Tell ts what the available data is
interface AuthContextType {
    user: User | null;
    loading: boolean;
}

// 2. Create the context using the defined type or undefined
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

// 3. Provider hosts children, manages states, and gets user if able
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);
    const supabase = supabaseClient();

// 4. useEffect to run on mount
    useEffect(() => {

        // 4a. Gets user data from supabase and sets state
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        };

        getUser();

        // 4b. Cleans listener when component unmounts to prevent memory leaks
        const { data: { subscription }} = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();

    }, [supabase.auth])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}