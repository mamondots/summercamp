import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ManageClasses = () => {

  const [items, setItems] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/classes')
      .then(res => res.json())
      .then(data => {
        setItems(data)

      })
  }, [])

  const handleAproved = item => {
    fetch(`http://localhost:5000/classes/Approve/${item._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item.name} is Aproved`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }


  const handleDely = item => {
    fetch(`http://localhost:5000/classes/delay/${item._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item.name} is Dely`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })

  }

  return (
    <div>

      {
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>

                <th>Name</th>
                <th>Instructor</th>
                <th>Available-Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>


              {
                items?.map(item => <tr
                  key={item._id}
                >

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>

                      </div>
                    </div>
                  </td>
                  <td>
                    {item.inname}
                    <br />
                    <span className="badge badge-ghost badge-sm">{item.inemail}</span>
                  </td>
                  <td>{item.available_seats}</td>
                  <td>{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{
                      item.status === 'Approveed' ? 'Approveed' : 'pending' &&
                      item.status === 'denied' ? 'denied' : 'pending'
                    }
                    </button>
                  </th>
                  <th>


                    <div className="flex space-x-8">
                     <div>
                     {
                        item.status === 'Approveed' ? 'Approve' :
                          <button onClick={() => handleAproved(item)}>Approve</button>
                      }
                     </div>


                     <div className="ml-5">
                     {
                        item.status === 'denied' ? 'denied' :
                          <button onClick={() => handleDely(item)}>delay</button>
                      }
                     </div>

                      <Link to={`/dasboard/feedback/${item._id}`}><button className="btn btn-ghost btn-xs">feedback</button></Link>
                    </div>



                  </th>
                </tr>)
              }





            </tbody>


          </table>
        </div>
      }


    </div>
  );
};

export default ManageClasses;