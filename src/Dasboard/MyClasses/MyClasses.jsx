import Swal from "sweetalert2";
import useMyClass from "../../Hooks/useMyClass";


const MyClasses = () => {
    const [itemClass, refetch] = useMyClass()

    const handleDelete = item => {
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
             
                fetch(`http://localhost:5000/classes/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
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
        <div className="w-full px-10">
            <div className="w-full">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            itemClass.map(item => <tr
                                key={item._id}>
                                <td>
                                    <div className="font-bold">{item.name}</div>
                                </td>
                                <td>
                                    pending
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Feadback</button>
                                </th>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;