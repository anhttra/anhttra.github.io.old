import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Anh Tra" />
        <p style={{textAlign: "justify"}}>I am a husband and a father of one son. I am also an enthusiastic AI/ML/DL engineer, who can study hard, work hard, play hard and die softly. My <a target="_blank" href="https://drive.google.com/file/d/1NETz2DDFqCcbWEPSwZrbMV1fpvdLoyqQ/view?usp=sharing">resumé</a>.</p>
      <Bio/>
      </Layout>
    )
  }
}

export default AboutPage


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
