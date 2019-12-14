# Gatsby the Robust

Robust starter for Gatsby 2 : Use TS objects as source for React props, and don't spread GraphQL everywhere

## Gatsby the right way

* Don't spread GraphQL everywhere
* Load data with GraphQL
    - once for markdown posts
    - if needed : once for additional json data
    - if needed : .... your custom data, images, anything form a plugin...
* These data are loaded as JS objects : write a declaration interface, then use typescript
* Send these typescript objects to React props


## Queries

* Posts : allMarkdownPost
* Images : file{
            relativePath = *.jpg, *.png, *.jpeg, *.gif
            childImageSharp{   // aka GatsbyImageSharpFluid
                src
                srcSet
                base64
                aspectRatio
                sizes
            }
            
        }


// a voir comment l'utiliser
allFile(filter: extension :regex ="/(jpg|jpeg|)/"){
    relativeDirectory = "/components/images"
}

## Images

From Gatsby images doc: 

> This isn’t ideal. Optimized images should be easy and the default.

I don't quite agree with **the default**. There are major shortcoming

* Theory: STU**P**ID principles : P for Prematured Optimization
* CSS : it's really **HARD** to change the css of the Gatsby Images
* Complexity: it's a PNG, not a PHD 

However, optimizing by default when content varies will avoid writers to upload 10Mb images, 
leaving you with a stalled a website.

So I give Gatsby a point and a try. Gatsby Images are in the starter kit and I recommand you to read the 
Image section in [What I wished I knew before starting Gatsby]()  


### Fragments

...GatsbyImageSharpFluid
...GatsbyImageSharpFluid_tracedSVG : permet d'avoir un SVG placeholder




### Trouble shooting

Check the render method of `HotExportedComponent`. Expected a string  or a class/function but got: object.


Check you return a default value for the component

in src/templates/blog-roll.tsx:

    export const BlogRoll = (props:any) => {}
    export default BlogRoll;

## Gotchas

* You need to compile your js files next to typescript files
    - not in a `dist/` directory
    - it's a bit nasty when you want to delete a file
    - https://github.com/robusta-code/gatsby-the-robust/issues/2
    


    
