import Swal from "sweetalert2";


const AddClasses = () => {
    const handleAddClass = event =>{
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const image = form.image.value
        const inname = form.inname.value
        const available_seats = form.available_seats.value
        const price = form.price.value
        const inemail = form.inemail.value

        const newItem = {name,image,inname,available_seats,price,inemail }
        console.log(newItem)

        fetch('http://localhost:5000/classes',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
    return (
        <div>
             <h2 className="text-2xl font-bold text-center">Add A class</h2>
            <div className="hero">
               
                <div className="card flex-shrink-0 w-full  max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleAddClass} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text"    name="name" placeholder="Class Name" className="input input-bordered" />
                            
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="url"  name="image" placeholder="Image" className="input input-bordered" />
                           
                        </div>

                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instuctor Name</span>
                                </label>
                                <input type="text"
                                    name="inname" placeholder="Instuctor Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instuctor Email</span>
                                </label>
                                <input type="email" name="inemail" placeholder="Instuctor Email" className="input input-bordered" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input type="text" 
                                    name="available_seats"  placeholder="Available seats" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Add Class" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClasses;