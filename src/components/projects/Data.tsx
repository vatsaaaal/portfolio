import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Jaisohn Website',
    description:
      'Developed a modernized web platform for the Philip Jaisohn Memorial Foundation, a nonprofit serving the elderly Asian community in the U.S. The platform improves donation processing, accessibility, and user engagement while maintaining a simple, easy-to-use interface. Integrated an AI-powered chatbot using Amazon Lex and SageMaker.',
    techStack: ['Django', 'HTML', 'AWS (EC2, S3)', 'Amazon Lex', 'SageMaker'],
    date: '2025',
    links: [{ name: 'website', url: 'https://jaisohn.org/' }],
    images: [
      { src: '/jaisohn1.png', alt: 'Jaisohn landing page' },
      { src: '/jaisohn2.png', alt: 'Jaisohn portal interface' },
    ],
  },
  {
    title: "Dragon's Craigslist - Drexel Student Marketplace",
    description:
      'Built a Craigslist-style marketplace exclusively for Drexel students to buy, sell, and trade course materials, lab equipment, laptops, furniture, and other student essentials. Implemented secure login, real-time messaging, and a listing approval system.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    date: '2024',
    links: [{ name: 'website', url: 'https://dragon-craigslist.vercel.app/' }],
    images: [
      { src: '/dragons1.png', alt: 'Marketplace landing page' },
      { src: '/dragons2.png', alt: 'Listing page' },
    ],
  },
  {
    title: 'PoolTogether - Rideshare Carpooling App',
    description:
      'Created a carpooling platform that connects travelers heading to the same destination or nearby locations. Allows users to post trips, join rides, chat, and split costs. Inspired by expensive airport-to-campus commutes.',
    techStack: ['Vite', 'React', 'Node.js', 'WebSockets', 'MongoDB', 'JWT'],
    date: '2024',
    links: [
      { name: 'website', url: 'https://dragon-rideshare.vatsaljain.lol/' },
    ],
    images: [{ src: '/pool1.png', alt: 'Rideshare app interface' }],
  },
  {
    title: 'Hackathon Project: Donator Pro',
    description:
      'Donator Pro: Web platform connecting donors to centers with real-time inventory and impact metrics.',
    techStack: ['Flask', 'React', 'TensorFlow.js', 'Leaflet', 'Postman'],
    date: '2023',
    links: [
      { name: 'Details', url: 'https://devpost.com/vatsaaaal' },
      {
        name: 'github',
        url: 'https://github.com/vatsaaaal/DonatorPro',
      },
    ],
    images: [
      { src: '/hackathon1.png', alt: 'Donator Pro interface' },
      { src: '/hackathon2.png', alt: 'Farmer Hub map' },
    ],
  },
  {
    title: 'Hackathon Projects: Farmer Hub',
    description:
      'AI-driven tools for crop disease detection and recommendations using MobileNetV2 and Leaflet maps.',
    techStack: ['Flask', 'React', 'TensorFlow.js', 'Leaflet', 'Postman'],
    date: '2023',
    links: [
      { name: 'devpost', url: 'https://devpost.com/vatsaaaal' },
      {
        name: 'github',
        url: 'https://github.com/vatsaaaal/FarmerPro',
      },
    ],
    images: [
      { src: '/hackathon1.png', alt: 'Donator Pro interface' },
      { src: '/hackathon2.png', alt: 'Farmer Hub map' },
    ],
  },
  {
    title: 'On-Campus Jobs Portal',
    description:
      'Developed a scalable on-campus job portal with role-based permissions, authentication, dynamic search, and RESTful APIs.',
    techStack: [
      'Django',
      'HTML/CSS',
      'JavaScript',
      'Django REST Framework',
      'PostgreSQL',
    ],
    date: '2022',
    images: [{ src: '/jobs1.png', alt: 'Jobs portal dashboard' }],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Work Experience',
    title: 'Website for PJMF',
    src: '/jaisohn.png',
    content: <ProjectContent project={{ title: 'Jaisohn Website' }} />,
  },
  {
    category: 'Project',
    title: "Dragon's Craigslist",
    src: '/dc.png',
    content: (
      <ProjectContent
        project={{ title: "Dragon's Craigslist - Drexel Student Marketplace" }}
      />
    ),
  },
  {
    category: 'Project',
    title: "Dragon's Rideshare",
    src: '/dr.png',
    content: (
      <ProjectContent
        project={{ title: 'PoolTogether - Rideshare Carpooling App' }}
      />
    ),
  },
  {
    category: 'Hackathon Winner',
    title: 'Donator Pro',
    src: '/dp.png',
    content: (
      <ProjectContent project={{ title: 'Hackathon Project: Donator Pro' }} />
    ),
  },
  {
    category: 'Hackathon Winner',
    title: 'Farmer Hub',
    src: '/fh.png',
    content: (
      <ProjectContent project={{ title: 'Hackathon Projects: Farmer Hub' }} />
    ),
  },
];
