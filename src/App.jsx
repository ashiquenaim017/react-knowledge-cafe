import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   const [bookmarks,setbookMarks]=useState([]);
   const [readTime,setReadtime]=useState(0);

   const handleBookMarks=(title)=>{
    const newBookMarks=[...bookmarks,title];
    setbookMarks(newBookMarks);
   }

   const handledMarkAsRead=(readingTime,title)=>{
          setReadtime(readTime+readingTime);
          
          setbookMarks(bookmarks.filter(bookmark=>bookmark!=title));
   }
  return (
    <>
    <div className='container mx-auto px-6'>
      <Header></Header>
      <div className='flex flex-col md:flex-row gap-4'>
      <Blogs handleBookMarks={handleBookMarks} handledMarkAsRead={handledMarkAsRead}></Blogs>
      <div className='w-1/3 '>
        <p className='text-blue-800 bg-purple-200 font-semibold py-4 text-center -mt-0 rounded-lg'>Spent Time On Read : {readTime} min</p>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      </div>
      
    </div>
       
    </>
  )
}

export default App
