export type Html = string
export type AuthorName = string

export interface Post {
    id: string
    html: Html
    frontmatter: {
        category: string
        title: string
        date: string
        author: AuthorName
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
            aspectRatio: number
            sizes: string
            base64: string
        }
        original: {
            src: string
        }
    }

}
