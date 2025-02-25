import { useEffect, useState } from "react"

export const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

  return (
    <div>
        
    </div>
  )
}
