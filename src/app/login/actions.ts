'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { supabaseServer } from "@/utils/supabase/server"

export async function login(formData: FormData) {
    console.log('Attempting login...');
    const supabase = await supabaseServer()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data: authData, error } = await supabase.auth.signInWithPassword(data);

    console.log('Login result: ', { authData, error })

    if (error) {
        console.log('Error: ', error);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')

}

export async function signup(formData: FormData) {
    const supabase = await supabaseServer()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signout() {
    const supabase = await supabaseServer();
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log('Error signing in: ', error)
    }

    revalidatePath('/', 'layout');
    redirect('/?refresh=true');
}