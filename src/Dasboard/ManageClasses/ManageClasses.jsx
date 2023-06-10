import { useEffect, useState } from "react";



const ManageClasses = () => {

    const [items, setItems] = useState()
    const {loader, setLoader} = useState(false)

    useEffect(() =>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data =>{
            setItems(data)
            setLoader(true)
        })
    },[])
      
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
                    items?.map(item =><tr
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
                          <br/>
                          <span className="badge badge-ghost badge-sm">{item.inemail}</span>
                        </td>
                        <td>{item.available_seats}</td>
                        <td>{item.price}</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">pending</button>
                        </th>
                        <th>
                          <button className="btn btn-ghost btn-xs">Approve</button>
                          <button className="btn btn-ghost btn-xs">delay</button>
                          <button className="btn btn-ghost btn-xs">feedback</button>
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