import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Project extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <div className="project">
        <div className="project__meta">
          <time
            className="project__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="project__meta-divider" />
          <span className="project__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="project__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="project__title">
          <Link className="project__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="project__description">{description}</p>
        <Link className="project__readmore" to={slug}>
          Read
        </Link>
      </div>
    )
  }
}

export default Project
