import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>I'm a human living in a non-human universe.</p>
        <Link to="/contact">Get in Touch</Link>
      </Layout>
    </div>
  )
}

export default AboutPage
