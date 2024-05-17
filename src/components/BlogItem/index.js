// Write your JS code here
import './index.css'

const Solution = props => {
  const {items} = props
  const {title, description, publishedDate} = items

  return (
    <li className="RowArrangeEl9">
      <div className="ColArrangeEl">
        <h1 className="titleEl1">{title}</h1>
        <p className="para3">{description}</p>
      </div>
      <p className="para3">{publishedDate}</p>
    </li>
  )
}

export default Solution
