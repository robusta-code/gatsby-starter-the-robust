export interface Post {
    id: string
    frontmatter: {
        category: string
        title: string
        date: string
        author: string
        tags: string[]
        image: GastbyImage
    }
    fields: {
        slug: string
    }
    excerpt: string
}

export interface GastbyImage {
    absolutePath: string
    childImageSharp: {
        fluid: {
            src: string
            srcSet: string
            aspectRatio: string
            sizes: string
            base64: string
        }
        original: {
            src: string
        }
    }

}
