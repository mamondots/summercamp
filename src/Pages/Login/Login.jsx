import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-12 pb-12">
            <div className="hero min-h-screen bg-base-200">
               
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-semibold">Login Now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center">New Here! <Link className="text-center text-red-500" to='/singup'>Sing Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
     
    );
};

export default Login;