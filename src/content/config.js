import { z, defineCollection } from "astro:content"

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

const footerDataCollection = defineCollection({

    schema: z.object({

        text: z.string(),
        icon: z.string(),
        link: z.string(),
        order: z.number(),
        live: z.boolean(),

    })

})

const footerLinksCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),

    })

})

export const collections = {

    "footer-blogs": footerBlogsCollection,
    "footer-data": footerDataCollection,
    "footer-links": footerLinksCollection,

}
