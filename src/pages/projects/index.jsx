import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Project from '../../components/Project'
import Sidebar from '../../components/Sidebar'
import Img from 'gatsby-image';

class ProjectIndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const projects = this.props.data.allMarkdownRemark.edges
    projects.forEach(project => {
      
      items.push(<Project data={project} key={project.node.fields.slug} />)
      items.push(<Img fixed={project.node.frontmatter.featuredImage.childImageSharp.fixed} />)
      items.push(<p />)
      items.push(<br />)
      items.push(<br />)     
     // images.push(<Img sizes={project.node.frontmatter.featuredImage.childImageSharp.sizes} />)
    })
    
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />            
          </Helmet>           
          <Sidebar {...this.props} />
          <div className="content">
               <div className="content__inner">{items}</div>            
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectIndexRoute

export const pageQuery = graphql`
  query IndexProjectQuery {
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
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "project" }, draft: { ne: true } } }
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
            featuredImage {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
