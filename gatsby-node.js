const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const {
        data: {
            allWpPost: { nodes: allPosts },
        },
    } = await graphql(`
        query {
            allWpPost {
                nodes {
                    id
                    uri
                    slug
                    title
                    content
                }
            }
        }
    `)
    const postTemplate = path.resolve(`./src/templates/post.js`)
    allPosts.forEach(post => {
        createPage({
            path: post.slug,
            component: slash(postTemplate),
            context: post,
        })
    })
}