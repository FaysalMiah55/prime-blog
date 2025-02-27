import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between mb-4 ">
        <div className="flex">
          <img className="w-14 h-14 rounded-full" src={author_img} alt={`Author Profile ${author}`} />
          <div className="ml-6">
            <h3 className="text-2xl"> {author} </h3>
            <p className=""> {posted_date} </p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl text-red-600"><CiBookmark /></button>
        </div>
      </div>
      <h2 className="text-4xl"> {title} </h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx} className="ml-2"><a href="">{hash}</a></span> )
        }
      </p>
      <button
        onClick={()=> handleMarkAsRead(id, reading_time)}
        className="text-purple-800 font-bold underline">Mark As Read</button>
    </div>
  )
}

Blog.propType = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;