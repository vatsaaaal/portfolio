import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Vatsal Jain. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Hi, I'm Vatsal Jain, a Full Stack Developer and Software Engineering student at Drexel University. I specialize in building scalable web applications with technologies like Django, React, Node.js, and AWS. I've worked on projects like modernizing nonprofit websites and creating student marketplaces, and I'm passionate about problem-solving and innovation in tech.",
    };
  },
});
