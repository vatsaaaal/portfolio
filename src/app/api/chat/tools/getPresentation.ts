import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Vatsal Jain. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm a passionate software engineering graduate from Drexel University with a BS in Software Engineering (GPA 3.74, Magna Cum Laude), driven to solve complex business challenges through innovative, scalable technology in fast-paced environments. Specializing in full-stack and cloud DevOps, I excel in building robust APIs, distributed systems, and cloud-native solutions using languages like Python and JavaScript, while thriving in agile teams to deliver high-impact products. My hands-on experience includes upgrading large Django codebases at Greenphire to eliminate vulnerabilities, developing real-time APIs for EV charging at Roboslog, and leading projects like the Jaisohn Foundation website redesign with AWS autoscaling for 99.9% uptime and the Dragons Rideshare app for efficient student carpooling. Beyond coding, I've earned recognition in hackathons for innovative solutions in healthcare and sustainability, fueling my commitment to user-focused development. When not engineering, I enjoy exploring new tech trends, hiking, and contributing to open-source communities. I'm all about problem-solving and innovation in tech! So, what about you? What brings you here? 😊",
    };
  },
});
