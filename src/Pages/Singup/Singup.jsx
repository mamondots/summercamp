import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Singup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  console.log(errors);
    return (
        <div className="navbar max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-12 pb-12">
           
                <div className="hero min-h-screen bg-base-200 py-20">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-center text-2xl font-semibold">Sing Up Now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", 
                                {
                                     required: true,
                                     minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                 {errors.password?.type === 'required' && <span>password is required</span>}
                                {errors.password?.type === 'minLength' && <span>password has 6 caractar</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" {...register("confirmPassword", { required: true })} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span>photoURL is required</span>}
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