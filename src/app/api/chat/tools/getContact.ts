import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows my contact informations.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my contact informations above, Feel free to contact me I will be happy to answer you 😉";
  },
});
