import { z, defineCollection } from 'astro:content';
import { glossary } from './glossary/_';

// An experiment that was, or is being, performed to help decision making
const experiment = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        goal: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
    })
})

// A chapter that needs to be read
const chapter = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        order: z.number().int().positive(),
    })
})

export const collections = {
    'glossary': glossary,
    'experiment': experiment,
    'chapter': chapter,
};