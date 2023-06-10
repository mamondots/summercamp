import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <div>
            <h2>Total User{users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="flex space-x-8">
                                        <div>
                                            {
                                                user.role === 'admin' ? 'admin' : 'make admin'
                                            }
                                        </div>
                                        <div>
                                            {
                                                user.role === 'instructor' ? 'Instructor' : 'make instructor'
                                            }
                                        </div>
                                    </td>
                                    <td>Delete</td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;