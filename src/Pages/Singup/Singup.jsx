
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGooglePlusG } from 'react-icons/fa';
import Swal from "sweetalert2";
//import usePasswordToggle from "../../Hooks/usePasswordToggle";

const Singup = () => {
   //const [InputType,Icon] = usePasswordToggle()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile, loading,signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const creteUser = result.user
                console.log(creteUser)
                updateUserProfile(data.name, data.photoURL)
                    .then( () => {
                        const savaUser = {name: data.name, email:data.email, image:data.photoURL}
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body:JSON.stringify(savaUser)
                        })
                        .then(res =>res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })

                       

                        
                        navigate(from, { replace: true })
                    })
            })

          


       
    };

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                const savaUser = {name:loggedUser.displayName, email:loggedUser.email, image:loggedUser.photoURL
                }
                        fetch('http://localhost:5000/users',{
                            method:'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body:JSON.stringify(savaUser)
                        })

                        .then(res =>res.json())
                        .then(() => {
                            
                                navigate(from, { replace: true })
                            
                        })

            })
            .catch(err => console.log(err))
    }

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
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                    <span className=" absolute right-4 top-12 font-semibold cursor-pointer text-sm mt-1">{}</span>
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
                        <div onClick={handleGoogleSingIn} className="flex justify-center text-center  items-center space-x-6 hover:text-red-500 cursor-pointer">
                            <div>
                            <p><FaGooglePlusG className="text-3xl"></FaGooglePlusG></p>
                            
                            </div>
                            <div>
                            <p>Continue with Google </p>
                            </div>
                        </div>
                        <p className="text-center">Already Have Account <Link className="text-red-500" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Singup;