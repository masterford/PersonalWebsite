import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import './style.scss'

class ProjectTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const project = this.props.data.markdownRemark
    const tags = project.fields.tagSlugs

    const homeBlock = (
      <div>
        <Link className="project-single__home-button" to="/projects/">
          All Projects
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="project-single__tags">
        <ul className="project-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="project-single__tags-list-item" key={tag}>
                <Link to={tag} className="project-single__tags-list-item-link">
                  {project.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          projectNode={project}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="project-single">
          <div className="project-single__inner">
            <h1 className="project-single__title">{project.frontmatter.title}</h1>
            <div
              className="project-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: project.html }}
            />
            <div className="project-single__date">
              <em>
                Published {moment(project.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="project-single__footer">
            {tagsBlock}
            <hr />
            <p className="project-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
            {commentsBlock}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectTemplateDetails
