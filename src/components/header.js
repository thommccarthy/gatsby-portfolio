import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
//destructure from module
import {
  navitem,
  header,
  title,
  navlist,
  activenavitem,
} from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={header}>
      <h1>
        <Link className={title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navlist}>
          <li>
            <Link className={navitem} activeClassName={activenavitem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navitem}
              activeClassName={activenavitem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navitem}
              activeClassName={activenavitem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navitem}
              activeClassName={activenavitem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
