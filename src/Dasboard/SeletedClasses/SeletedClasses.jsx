import Swal from "sweetalert2";
import useSeletedClass from "../../Hooks/useSeletedClass";


const SeletedClasses = () => {
    const [seletedClass, refetch] = useSeletedClass()
    const total = seletedClass.reduce((sum, item) => item.price + sum, 0)


    const handleDelete = row =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/seleted/${row._id}`,{
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deleteCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div>

            <div className="flex justify-evenly items-center">
                <h3>total class :{seletedClass.length}</h3>
                <h3>total :{total}</h3>
                <button className="btn btn-error">Pay</button>
            </div>


            <div>
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Action</th>

                                
                            </tr>
                        </thead>
                        <tbody>
                          
                          {
                            seletedClass.map(row => <tr
                            key={row._id}
                            
                            >
                                
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                   
                                </td>
                                <td>{row.available_seats}</td>
                                <td>${row.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Payment</button>
                                    <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                                
                            </tr>)
                          }
                            
                           
                           
                           
                        </tbody>
                       
                        

                    </table>
                </div>
            </div>
        </div>
    );
};

export default SeletedClasses;