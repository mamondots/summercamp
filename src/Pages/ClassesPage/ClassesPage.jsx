import { useEffect, useState } from "react";
import ClassesPageCard from "./ClassesPageCard";


const ClassesPage = () => {
    const [classItems,setClassItems] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClassItems(data)
            console.log(data)
        })
    },[])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-28 pb-12 ">
            <div className="bg-[#570DF8] p-12">
                <p className="text-white">Here All Classes</p>
                <h2 className="text-white text-3xl font-bold pt-1">Join Your Favarit Class</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:gap-8 md:gap-6 sm:gap-2 gap-2 pt-12">
                 
                     {
                        classItems.map(classitem => <ClassesPageCard
                        key={classitem._id}
                        classitem={classitem}
                        >
 
                        </ClassesPageCard>) 
                     }
                 
            </div>
        </div>
    );
};

export default ClassesPage;