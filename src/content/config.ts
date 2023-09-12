import { z, reference, defineCollection } from 'astro:content';

const glossary = defineCollection({
    type: 'data',
    schema: z.object({
        word: z.string(),
        definition: z.string(),
        relatedPage: reference('glossaryPage').optional(),
    }),
});

const glossaryPage = defineCollection({
    type: 'content',
    schema: z.object({
        glossary: reference('glossary')
    })
})

export const collections = {
    'glossary': glossary,
    'glossaryPage': glossaryPage,
};