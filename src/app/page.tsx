import Image from "next/image";

type VariantType = 'javascript' | 'python' | 'typescript' | 'nextjs' | 'react' | 'tailwind' | 'django' | 'restapi' | 'express' | 'supabase' | 'github' | 'vercel' | 'digitalocean' | 'liquid' | 'shopify' | 'ecommerce' | 'machinelearning' | 'pandas' |'default';

interface TagProps {
  children: React.ReactNode;
  variant?: VariantType;
}

function Tag({ children, variant = 'default' }: TagProps) {
    const variants = {
      // Languages
      javascript: 'bg-yellow-500/50 text-yellow-100 border-yellow-500/90',
      python: 'bg-blue-400/50 text-blue-100 border-blue-400/90',
      typescript: 'bg-blue-600/50 text-blue-200 border-blue-600/90',

      // Frontend
      nextjs: 'bg-black/50 text-white border-gray-200/90',
      react: 'bg-red-500/50 text-red-100 border-red-500/90',
      tailwind: 'bg-cyan-500/50 text-cyan-100 border-cyan-500/90',

      // Backend
      django: 'bg-green-600/50 text-green-100 border-green-600/90',
      restapi: 'bg-gray-600/50 text-gray-100 border-gray-600/90',
      express: 'bg-yellow-400/50 text-yellow-100 border-yellow-400/90',

      // Services
      supabase: 'bg-emerald-500/50 text-emerald-100 border-emerald-500/90',
      github: 'bg-purple-600/50 text-purple-100 border-purple-600/90',

      // Deployment tools
      vercel: 'bg-black/50 text-white border-gray-600/90',
      digitalocean: 'bg-blue-400/50 text-blue-100 border-blue-400/90',

      // Other
      machinelearning: 'bg-purple-500/50 text-purple-100 border-purple-500/90',
      liquid: 'bg-green-400/50 text-green-100 border-green-400/90',
      shopify: 'bg-green-500/50 text-green-200 border-green-500/90',
      ecommerce: 'bg-blue-500/50 text-blue-100 border-blue-500/90',

      // Other tools
      sklearn: 'bg-orange-500/50 text-orange-100 border-orange-500/90',
      pandas: 'bg-blue-600/50 text-blue-100 border-blue-600/90',
      jupyter: 'bg-orange-600/50 text-orange-100 border-orange-600/90',

      // Default
      default: 'bg-gray-500/50 text-gray-100 border-gray-500/90'
    };

    return (
    <span className={`
        inline-block rounded-full border px-3 py-2 text-sm font-medium m-1
        ${variants[variant] || variants.default}`}>
            {children}
        </span>
    );
}

export default function Home() {
      const projects = [
        {
            title: 'LaunchLens',
            desc: 'Enter your business concept and get a list of real-world competitors with summaries, strengths, and gaps — all in seconds. Skip the guesswork and get clarity.',
            image: '/images/Launchlens.jpg',
            link: 'https://launchlens.vercel.app/',
            tags: [
              'typescript',
              'nextjs',
              'vercel',
              'tailwind',
              'supabase',
              'github'
            ]
        },
        {
            title: 'MehaLabs',
            desc: 'Build Smarter. Launch Faster. Custom software solutions for startups and innovators.',
            image: '/images/meha.jpg',
            link: 'https://www.mehalabs.ai/',
            tags: [
              'nextjs',
              'tailwind',
              'vercel',
              'github'
            ]
        },
        {
            title: 'GovComp',
            desc: 'A comparison tool giving government contractors an edge. Compare spending, report, and news data on companies.',
            image: '/images/gov.jpg',
            link: '',
            tags: [
              'react',
              'express',
              'supabase',
              'github'
            ]
        },
        {
            title: 'IsMyCeoAFraud',
            desc: 'Generated 10,000+ new newsletter subscribers. Enter a LinkedIn URL and get a fraud score.',
            image: '/images/ceo.jpg',
            link: 'https://ismyceoafraud.com/',
            tags: [
              'react',
              'express',
              'supabase',
              'github'
            ]
        },
        {
            title: 'BravoBurrito',
            desc: 'Custom Shopify liquid website for a restaurant',
            image: '/images/bb.jpg',
            link: 'https://thebravoburrito.com/',
            tags: [
              'shopify',
              'liquid',
              'ecommerce'
            ]
        },
                {
            title: 'Stellar Classification: 97.9% Accuracy',
            desc: 'Stellar classification and model comparision',
            image: '/images/stellar.jpg',
            link: 'https://github.com/NPierce1798/StellarClassifier',
            tags: [
              'python',
              'machinelearning',
              'sklearn',
              'pandas',
              'github'
            ]
        },

    ];

    const tagDisplayNames: { [key: string]: string } = {
      javascript: 'JavaScript',
      python: 'Python',
      typescript: 'TypeScript',
      nextjs: 'Next.js',
      react: 'React',
      tailwind: 'Tailwind',
      django: 'Django',
      restapi: 'REST API',
      express: 'Express',
      supabase: 'Supabase',
      github: 'GitHub',
      vercel: 'Vercel',
      digitalocean: 'DigitalOcean',
      liquid: 'Liquid',
      shopify: 'Shopify',
      ecommerce: 'E-commerce',
      machinelearning: 'Machine Learning',
      sklearn: 'SK-Learn',
      pandas: 'Pandas'
    };

  return (
    <div className="flex flex-col bg-gray-900 items-center p-6">
      <div className="flex flex-col items-center w-2/3 border-b border-gray-700 p-10 hover:border-blue-400 transition">
        <p className="text-3xl font-bold mb-4 text-white">Full Stack Developer</p>
        <p className="w-2/3 text-gray-300">Former electrician turned Software Engineer, I have a passion for building solutions to solve complex problems. I&apos;ve developed a strong appreciation for the full lifecycle of building software — not just writing code, but also shaping ideas, designing experiences, and seeing a project through from start to finish.</p>
      </div>

      <div className="grid grid-cols-2 gap-6 w-2/3 mx-10 border-b border-gray-700 p-10 hover:border-blue-400 transition">
        <div className="h-75 py-1 border border-gray-600 hover:border-blue-400 rounded-2xl  transition bg-gray-950 flex items-center h-fit justify-center text-gray-400">
          <Image
            src='/images/pierce.jpg'
            width={300}
            height={200}
            className="rounded-xl"
            alt="Launch Lens"
            />
          </div>
        <div className="h-75">
          <p className="text-2xl font-bold text-white mb-4">Skills & Approach</p>
          <p className="text-gray-300 leading-relaxed">I approach development with a builder&apos;s mindset, drawing from my background in electrical work where precision and systematic thinking were essential. My experience ranges from crafting responsive user interfaces with <strong className="text-blue-400">React</strong> and <strong className="text-blue-400">CSS</strong> to building robust backend systems with <strong className="text-blue-400">Python</strong> and <strong className="text-blue-400">Django</strong>. I&apos;m well-versed in database design, cloud deployment with <strong className="text-blue-400">DigitalOcean</strong>, and modern authentication patterns using <strong className="text-blue-400">Supabase</strong> — skills that let me transform ideas into fully functional applications.</p>
        </div>
      </div>

      <p className="text-2xl font-bold text-white mb-2 mt-4">My Work</p>
      <div className="grid grid-cols-2 gap-6 w-2/3 mx-10 border-b border-gray-700 p-10 hover:border-blue-400 transition">
      {projects.length > 0 ? (
                          projects.map((project, index) => (
                              <div className="h-fit min-h-100 border border-gray-600 hover:border-blue-400 rounded-2xl p-1 transition bg-gray-800 flex flex-col items-center text-gray-400" key={index}>
      
                                  <Image
                                      src={project.image}
                                      width={600}
                                      height={300}
                                      className="mb-2 rounded-t-xl mt-0"
                                      alt="Launch Lens"
                                      />
                                  <div className="w-full flex flex-row justify-between p-2 border-b-1 border-gray-500">
                                      <p className="text-left text-xl text-blue-200 font-bold ml-2">{project.title}</p>
                                      
                                      <a href={project.link} className="h-10  mr-2 text-white hover:text-gray-200 hover:underline hover:bg-blue-700 cursor-pointer bg-blue-500 rounded-lg p-2 font-bold">Link</a>
                                  </div>
                                  
                                  <div className="flex flex-wrap gap-1 p-2 w-full">
                                    {project.tags.map((tag, tagIndex) => (
                                      <Tag key={tagIndex} variant={tag as VariantType}>
                                        {tagDisplayNames[tag] || tag}
                                      </Tag>
                                    ))}
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