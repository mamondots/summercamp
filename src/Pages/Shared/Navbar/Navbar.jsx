import { Link } from 'react-router-dom';
import userImg from '../../../assets/images/userImg.jpg'
const Navbar = () => {
    const Navbar = <>
        <li className='text-lg font-medium'><a>Home</a></li>
        <li className='text-lg font-medium'><a>Instructors</a></li>
        <li className='text-lg font-medium'><a>Classes</a></li>
        <li className='text-lg font-medium'><a>Dashboard</a></li>
        
    </>
    const user = true
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
            <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Mamon<span>dots</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {Navbar}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='w-8 rounded-full'>
                  {
                      user? <>
                      <li className='list-none'><Link to='/login'>Login</Link></li>
                      </>:<>
  
                       
                       <img className='rounded-full' src={userImg} alt="" />
                      </>
                  }
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Navbar;