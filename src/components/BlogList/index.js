// Write your JS code here
import Solution from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachItem => (
        <Solution key={eachItem.id} items={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
