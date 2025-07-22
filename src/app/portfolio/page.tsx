import Image from "next/image";


export default function Portfolio() {

    const projects = [
        {
            title: 'LaunchLens',
            desc: 'Enter your business concept and get a list of real-world competitors with summaries, strengths, and gaps — all in seconds. Skip the guesswork and get clarity.',
            image: '/images/Launchlens.jpg',
            link: 'https://launchlens.vercel.app/',
        },
        {
            title: 'MehaLabs',
            desc: 'Build Smarter. Launch Faster. Custom software solutions for startups and innovators.',
            image: '/images/meha.jpg',
            link: 'https://www.mehalabs.ai/',
        },
        {
            title: 'GovComp',
            desc: 'A comparison tool giving government contractors an edge. Compare spending, report, and news data on companies.',
            image: '/images/gov.jpg',
            link: '',
        },
        {
            title: 'IsMyCeoAFraud',
            desc: 'Generated 10,000+ new newsletter subscribers. Enter a LinkedIn URL and get a fraud score.',
            image: '/images/ceo.jpg',
            link: 'https://ismyceoafraud.com/',
        },
        {
            title: 'BravoBurrito',
            desc: 'Custom Shopify liquid website for a restaurant',
            image: '/images/bb.jpg',
            link: 'https://thebravoburrito.com/',
        },

    ];

    return (
        <div className="flex flex-col w-full h-screen items-center p-6">
            <h2 className="text-3xl font-bold mb-4">PORTFOLIO</h2>
            <p className="text-xl mb-2">Like what you see? Send me an email:</p>
            <a href="mailto:npierce1798@gmail.com" className="font-bold bg-blue-500 border rounded-2xl p-2 hover:bg-blue-700">Contact</a>

            <div className="grid grid-cols-2 gap-4 p-6">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div className="flex flex-col border rounded-xl border-gray-600 p-6 hover:border-blue-300 transition" key={index}>

                            <Image
                                src={project.image}
                                width={600}
                                height={300}
                                className="mb-2"
                                alt="Launch Lens"
                                />
                            <div className="mt-auto">
                                <p className="text-blue-300 font-bold">{project.title}</p>
                                <p className="mb-4"><strong>Description:</strong> {project.desc}</p>
                                <a href={project.link} className="hover:text-blue-500 hover:underline hover:bg-blue-900 cursor-pointer bg-blue-700 rounded-xl p-4 font-bold">Link</a>
                            </div>

                        </div>
                    ))
                ) : (
                    <div>None found</div>
                )}

            </div>
        </div>
    );
}