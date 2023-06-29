// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {title, description, publishedDate} = blogItems

  return (
    <li className="blog-list">
      <div className="blog-container">
        <h1 className="blog-header">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-para">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
