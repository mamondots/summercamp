import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/pexels-rdne-stock-project-8034585.jpg'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useSeletedClass from '../../../Hooks/useSeletedClass';


const ClassCard = ({ item }) => {
    const {name,image,available_seats,price,_id} = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [,refetch] = useSeletedClass()
    const handleAddClass = item => {
        if (user && user.email) {
            const seletedClass = {seletedId:_id, name, image, available_seats, price, email: user.email }
            fetch('http://localhost:5000/seleted', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(seletedClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Class added successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please First Login!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='text-xl font-semibold'>Available_Seats : {available_seats}</p>
                    <p className='text-xl font-medium'>price : ${price}</p>
                    <div className="card-actions w-full">
                       
                          <button onClick={() => handleAddClass(item)} className="btn btn-primary w-full">Add Class</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;