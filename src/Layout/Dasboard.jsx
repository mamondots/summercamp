import { Link, Outlet } from "react-router-dom";


const Dasboard = () => {
    return (
        <div className="pt-28 max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        <div className="mt-20">
                            <li className="text-xl font-semibold ">
                                <Link><a>Instructor Home</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/addclasses'><a>Add Class</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/myclasses'><a>My Classes</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/seletedclasses'><a>My Seleted Classes</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/enrollclass'><a>My enroll Classes</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/manageclasses'><a>Manage Classes</a></Link>
                            </li>
                            <li className="text-xl font-semibold ">
                                <Link to='/dasboard/manageuser'><a>Manage User</a></Link>
                            </li>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dasboard;