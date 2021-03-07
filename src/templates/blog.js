import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate
      body {
        raw
      }
    }
  }
`

const Blog = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  )
}

export default Blog
