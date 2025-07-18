import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description: 'This tool will show a list of all projects made by Vatsal',
  parameters: z.object({}),
  execute: async () => {
    return `I've got a bunch of cool projects and experiences under my belt! From upgrading Django backends at Greenphire to building scalable APIs for EV charging at Roboslog, and co-founding NGO Udaan to raise funds during the pandemic, I've been hands-on with real-world impact. One of my favorites is the Jaisohn Patient Portal, where I modernized a nonprofit's site with AWS cloud infrastructure, DevOps pipelines using GitHub Actions for CI/CD, and AI chatbots for better accessibility.

    These days, I'm all about full-stack apps like Dragons Craigslist—a student marketplace for buying/selling textbooks and gear—or Dragons Rideshare for affordable campus commutes, both leveraging cloud deployment on Vercel/Hetzner and DevOps tools like Docker and Kubernetes for scalability. Plus, hackathon wins with AI tools for food donation and crop disease detection. If you want details on any of these, hit me up! What kind of projects catch your eye? 😊`;
  },
});
