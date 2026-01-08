import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://hrishikeshverma.com' // Update this with your actual domain

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
