/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require(`gatsby-awesome-pagination`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    posts
      .filter(({ node }) => !node.frontmatter.draft)
      .forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          slug: node.fields.slug,
          context: {},
        })
      })

    // Create your paginated pages
    // paginate({
    //   createPage, // The Gatsby `createPage` function
    //   items: posts, // An array of objects
    //   itemsPerPage: 2, // How many items you want per page
    //   pathPrefix: "/blogs", // Creates pages like `/blog`, `/blog/2`, etc
    //   component: path.resolve("src/templates/blog-post.tsx"), // Just like `createPage()`
    // })
  })
}
