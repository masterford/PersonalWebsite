import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import "./homestyle.scss"
import { Link } from 'gatsby'
import Accra from './accra.jpeg'
import { withPrefix } from 'gatsby'

class IndexRoute extends React.Component {
  render() {
        
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
   // posts.forEach(post => {
    //  items.push(<Post data={post} key={post.node.fields.slug} />)
    //})
    //<div className="content__inner">{items}</div>
    
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">   
          <h2>Hello there, I'm Ransford and welcome to my site. Or as we say in Ghana, Akwaaba</h2>
            <div class="container">
            <Link to="/">
            <img src={Accra} alt="Accra" width="175"  height="175"/>
            </Link>
            <a rel="noopener noreferrer" href={withPrefix('/bb9c442c453fbe9f3547c3ea19af8e41/Ransford_Antwi_Resume.pdf')} class="button" target="_blank">View Resume</a>
            <a href="/projects" class="button">View Projects</a>          
            </div>                                        
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`
