import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let myplace
    if (location.pathname === rootPath) {
      myplace = ``
    } else {
      myplace = `My Tent`
    }
    /*
    if (location.pathname === rootPath) {
      header = (
        
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    } */
    header = (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, boxShadow: `none`}}>
          <h3 style={{ display: `inline` }}>{myplace}</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
        </ul>
      </header>
    )
    return (
      <div
        style={{
          margin: '0 auto 0 auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          position: `relative`,
          display: `flex`,
          minHeight: `100vh`,
          flexDirection: `column`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{
          position: 'absolute',
          bottom: 0,
          margin: 0,
          width: `100%`,
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} Anh T. Tra | Built with Gatsby and My Googling Skill.
          {` `}
        </footer>
      </div>
    )
  }
}

export default Layout
