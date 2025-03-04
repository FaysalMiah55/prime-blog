import { useState } from 'react'
import './App.css'
import { Blogs } from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { Header } from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) =>{
    // console.log('mark' ,time)
    setReadingTime(readingTime + parseFloat(time))
    // const newReadingTime = readingTime + time;
    // setReadingTime(newReadingTime)
    // console.log(newReadingTime)

    // remove the read blog from the list
    // console.log('remove id', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}         handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
