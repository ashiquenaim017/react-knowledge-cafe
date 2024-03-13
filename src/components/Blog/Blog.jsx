
import PropTypes from 'prop-types';
import { IoMdBookmark } from "react-icons/io";
const Blog = ({blog,handleBookMarks,handledMarkAsRead}) => {

    const {author,cover_image,hashtags,posted_date,reading_time,title}=blog;
    const {name,image}=author;
    return (
        <div className='border-b-2 pb-6'>
            <div>
                <img className="w-full h-[350px] rounded-lg" src={cover_image} alt={`cover image of blg ${title}`} />
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                    <img className="w-12 h-12 rounded-full mt-2" src={image} alt="" />
                    <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-[#11111199] -mt-3">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className="text-[#11111199]" >{reading_time} min read 
                    <button onClick={()=>handleBookMarks(title)} className='bg-transparent border-none text-base cursor-pointer text-red-700 '><IoMdBookmark /></button>
                    </p>
                </div>
            </div>
            <div className="text-3xl font-bold -mt-5">
                <p>{title}</p>
                <p className='-mt-8'>
                {
                 hashtags.map((hashtag,i)=><span key={i} className="text-[#11111199] text-[14px]">#{hashtag} </span>)
                }
                </p>
                <p className='-mt-8 -ml-1'>
                <button onClick={()=>handledMarkAsRead(reading_time,title)} className='text-blue-800 underline bg-transparent border-none cursor-pointer '>Mark As Read</button>
                </p>
                
            
            </div>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func,
    handledMarkAsRead:PropTypes.func
   

}

export default Blog;