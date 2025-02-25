import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookmark}) => {
  const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={author_img} alt={`Author Profile ${author}`} />
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p className=""> {posted_date} </p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={handleAddToBookmark} className="ml-2 text-2xl text-red-600"><CiBookmark /></button>
        </div>
      </div>
      <h2 className="text-4xl"> {title} </h2>
      <p>
        {
          hashtags.map(hash => <span className="ml-2"><a href="">{hash}</a></span> )
        }
      </p>
    </div>
  )
}

Blog.propType = {
  blog: PropTypes.object.isRequired
}

export default Blog;