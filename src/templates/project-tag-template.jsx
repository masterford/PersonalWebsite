import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import ProjectTagTemplateDetails from '../components/ProjectTagTemplateDetails'

class ProjectTagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { tag } = this.props.pageContext

    return (
      <Layout>
        <div>
          <Helmet title={`All Projects tagged as "${tag}" - ${title}`} />
          <Sidebar {...this.props} />
          <ProjectTagTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default ProjectTagTemplate

export const pageQuery = graphql`
  query ProjectTagPage($tag: String) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          github
          linkedIn
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          layout: { eq: "project" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
