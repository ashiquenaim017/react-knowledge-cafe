import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className=" bg-gray-300 rounded-lg py-6">
            <h1 className="text-3xl font-bold text-center">Bookmarked Blogs : {bookmarks.length}</h1>

            <div>
                {
                    bookmarks.map((bookmark,i)=><Bookmark key={i} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes={

    bookmarks:PropTypes.array
}

export default Bookmarks;