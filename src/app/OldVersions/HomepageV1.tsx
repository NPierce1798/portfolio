
export default function Home() {
    return (
        <div className="flex flex-col w-full h-screen items-center p-6">
        <div className="grid grid-cols-2 gap-4 w-2/3 p-4 border-2 border-gray-600 rounded-lg hover:border-green-300 transition">
            <div className="p-6">
            <h1 className="text-green-400 text-5xl font-bold">Welcome!</h1>
            <p className="text-xl">I built this to keep track of my own projects, then realized others might want the same thing. Welcome to our growing community of makers – share your work, follow creators you admire, and be part of something we&apos;re all building together.</p>
            </div>
            <div className="border-l-2 border-gray-600 p-6">
            <p className="text-green-500 text-5xl font-bold text-center">Features: </p>
            <ul className="font-bold space-y-2 text-xl">
                <li>- Share your projects</li>
                <li>- Like, comment, and follow projects</li>
                <li>- Dicover other creators</li>
                <li>- Collaborate with others</li>
                <li>- Manage team efforts</li>
            </ul>
            </div>
        </div>
        </div>
    );
}
