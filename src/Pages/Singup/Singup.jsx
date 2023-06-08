
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Singup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile, loading } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const creteUser = result.user
                console.log(creteUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(result => {
                        const updateUser = result.user
                        console.log(updateUser)
                        navigate(from, { replace: true })
                    })
            })




        reset()
    };



    return (
        <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-12 pb-12">

            <div className="hero min-h-screen bg-base-200 py-20">

                <div className="card flex-shrink-0 w-full  max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-center text-2xl font-semibold">Sing Up Now!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="p-2 text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="p-2 text-red-500">email is required</span>}
                        </div>
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="p-2 text-red-500">password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="p-2 text-red-500">password has 6 caractar</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" {...register("confirmPassword", { required: true })} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />

                        </div>

                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                        <p className="text-center">Already Have Account <Link className="text-red-500" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Singup;