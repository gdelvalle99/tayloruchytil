import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import blogpostStyles from './blog-post.module.css'
import Menu from "../components/menu"
import { Link } from "gatsby"


export default function BlogPost({ data }){
  const post = data.markdownRemark
  return(
    <div className={blogpostStyles.daddy}>
    <Menu />
      <h1 className={blogpostStyles.title}>{post.frontmatter.title}</h1>
      <div className={blogpostStyles.main}>
      <div className={blogpostStyles.container}>
      <Img className={blogpostStyles.Image} fluid={post.frontmatter.image.childImageSharp.fluid} />
      <hr></hr>
      <div className={blogpostStyles.text} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </div>
      <hr></hr>
      <p>Published on {post.frontmatter.date}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug} }){
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image{
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
