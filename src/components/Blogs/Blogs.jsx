import { useEffect, useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from "prop-types"

export const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

  return (
    <div className="md:w-2/3">
        <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
              ></Blog>)
        }
    </div>
  )
}

Blogs.proTotype = {
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}
