'use client';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabaseClient } from '@/utils/supabase/client';


export default function DashboardPage() {
    const { user, loading } = useAuth();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [repo, setRepo] = useState('');
    const [link, setLink] = useState('');
    const [thumbnail, setThumbnail] = useState<File | null>(null);

    const [message, setMessage] = useState('');

    const supabase = supabaseClient();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setThumbnail(e.target.files[0])
        }
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!user) {
            setMessage('User account not found')
            return
        }
        if (message) {
            console.log(message);
        }

        try {

            const insertProject = await supabase
                .from('projects')
                .insert({
                    user_id: user.id,
                    title: title,
                    description: desc,
                    repo_url: repo,
                    live_url: link,
                })
                .select()

                if (insertProject && insertProject.data) {
                    console.log('insertProject: ', insertProject.data[0])
                    const projectData = insertProject.data[0];

                    if (user.id && projectData.id && thumbnail) {
                        const { data, error } = await supabase
                            .storage
                            .from('project-thumbnails')
                            .upload(`${user.id}/${projectData.id}/${thumbnail.name}`, thumbnail, {
                                cacheControl: '3600',
                                upsert: false
                            })
                            

                        if (error) {
                            console.log('Error uploading image: ', { data, error })
                        }
                    }
                } else {
                    console.log('NULL')
                    return
                }

                




        } catch (e) {
            console.log('Error uploading project: ', e)
        }

    }

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>Please log in to view your dashboard.</p>;

    return (
        <div className='grid grid-cols-2 gap-4 p-6'>
            <section className='border-2 border-gray-600 rounded-xl p-2'>
                <h2 className='dashboard__welcome-message'><strong>Welcome,</strong> {user.email}</h2>
                <p className='dashboard__uid'>User Id: {user.id}</p>
            </section>

            <section className='dashboard__form'>
                <h3 className='dashboard__upload-heading'>Upload New Project</h3>
                <form className='flex flex-col space-y-2'>
                    <input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Project Title *' required className='border-1 border-white rounded-lg p-2' />
                    <input onChange={(e) => setDesc(e.target.value)} type='text' placeholder='Project Description' className='border-1 border-white rounded-lg p-2' />
                    <input onChange={(e) => setRepo(e.target.value)} type='text' placeholder='Repo URL' className='border-1 border-white rounded-lg p-2' />
                    <input onChange={(e) => setLink(e.target.value)} type='text' placeholder='Live URL' className='border-1 border-white rounded-lg p-2' />
                    <input onChange={handleFileChange} type='file' placeholder='Project Thumbnail' className='border-1 border-white rounded-lg p-2' />
                    <button onClick={handleSubmit} className='bg-green-500 curser-pointer font-bold p-2 rounded-xl hover:bg-green-800' >Upload</button>
                </form>
                
            </section>

            <section className='dashboard__projects'>
                <h3 className='dashboard__projects-heading'>Your Projects</h3>
                
            </section>
        </div>
    );
}