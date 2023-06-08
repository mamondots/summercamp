import { Link } from 'react-router-dom';
import errorImg from '../assets/images/error.jpg'

const Error = () => {

    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-28 pb-2">
            <div className='text-center flex justify-center items-center flex-col'>
                <img className='mt-5 w-64' src={errorImg} alt="" />
                <Link to='/'>
                <h2 className='px-20 py-6 bg-red-500 text-2xl font-bold text-white mt-6 cursor-pointer'>GO BACK</h2>
                </Link>
            </div>
        </div>
    );
};

export default Error;