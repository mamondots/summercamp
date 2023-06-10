import { useEffect, useState } from "react";
import ClassCard from "./ClassCard/ClassCard";


const Classes = () => {
    const [classInfo, setClassInfo] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClassInfo(data))
    },[])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
            <div>
                <div className="text-center pb-12">
                 <h2 className="text-3xl font-semibold">Popular Classes Section</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-6 sm:gap-2 pb-12">
                    {
                       classInfo.slice(0,6).map(item => <ClassCard
                       key={item._id}
                       item={item}
                       >

                       </ClassCard>) 
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Classes;