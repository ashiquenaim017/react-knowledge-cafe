
import profileImg from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className=' mt-4'>
            <div className='flex justify-between'>
            <h1>Knowledge Cafe</h1>
            <img className='h-14' src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Header;