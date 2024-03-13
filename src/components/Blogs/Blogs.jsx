import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks,handledMarkAsRead}) => {
    
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
       const fetchBlogs=async()=>{
        const res=await fetch('blogs.json') ;
        const data=await res.json();
        setBlogs(data);
        console.log(data);
       }
       fetchBlogs()


    },[])



    return (
        <div className="w-2/3">
            {
                blogs.map(blog=><Blog handleBookMarks={handleBookMarks} handledMarkAsRead={handledMarkAsRead} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookMarks:PropTypes.func,
    handledMarkAsRead:PropTypes.func
}

export default Blogs;