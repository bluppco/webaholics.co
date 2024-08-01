import { z, defineCollection } from "astro:content"

const footerLinksCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),

    })

})

const footerBlogsCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        image: z.string(),
        order: z.number(),
        date: z.string(),
        live: z.boolean(),
        link: z.string(),

    })
    
})

export const collections = {

    "footer-links": footerLinksCollection,
    "footer-blogs": footerBlogsCollection,

}
