import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGooglePlusG } from 'react-icons/fa';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext)
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.error(error)

            })

           

        reset()
    };
    const handlegoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user)
                

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-12 pb-12">
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-center text-2xl font-semibold">Login Now!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="p-2 text-red-500">email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className="p-2 text-red-500">password is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div onClick={handlegoogle}  className="flex justify-center text-center  items-center space-x-6 hover:text-red-500 cursor-pointer">
                            <div>
                            <p><FaGooglePlusG className="text-3xl"></FaGooglePlusG></p>
                            </div>
                            <div>
                            <p>Continue with Google </p>
                            </div>
                        </div>
                        <p className="text-center">New Here! <Link className="text-center text-red-500" to='/singup'>Sing Up</Link></p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;