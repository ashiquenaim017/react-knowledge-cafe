import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-[#FFFF] shadow-xl rounded-lg py-1 text-center mx-4 mb-4">
            <p className="font-semibold text-xl">{bookmark}</p>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.string.isRequired
}
export default Bookmark;