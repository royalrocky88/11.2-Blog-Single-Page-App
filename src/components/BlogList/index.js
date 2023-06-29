// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="list-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogItems={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
