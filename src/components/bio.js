/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            facebook
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
      }}>
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
      <div style={{
        width: `100%`,
        textAlign: `center`,        
      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />  
      <h1 style={{
        fontSize: `3rem`,
        fontWeight: `bold`,
        color: `#333333`,     
        margin: `0 auto 0 auto`
      }}>Anh T. Tra</h1>
      <hr style={{width: `60%`, margin: `0 auto 0 auto`}}/>
      <p style={{margin: 0}}>AI Researcher - Data Engineer - Coder - Speaker - Writer</p>
      <div style={{
        display: `flex`,
        justifyContent: `space-evenly`,
        width: `40%`,
        margin: `0 auto`
      }}>
        <a style={{color: `gray`, boxShadow: `none`}} href={`https://www.linkedin.com/in/${social.linkedin}`} rel="noopener noreferrer" target="_blank" >
          <i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize: `3em`, padding: `0 auto`}} />
        </a>
        <a style={{color: `gray`, boxShadow: `none`}} href={`https://github.com/${social.github}`} rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true" style={{fontSize: `3em`, padding: `0 auto`}} />
        </a>  
        <a style={{color: `gray`, boxShadow: `none`}} href={`https://facebook.com/${social.facebook}`} rel="noopener noreferrer" target="_blank">
          <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: `3em`, padding: `0 auto`}}/>
        </a>                      
      </div>            
    </div>
  </div>
  )
}

export default Bio
