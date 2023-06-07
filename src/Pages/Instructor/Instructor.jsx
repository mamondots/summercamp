import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";


const Instructor = () => {
    const [instructors ,setInstructors] = useState([])
    useEffect(() =>{
        fetch('Instructor.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
            <div>
            <div className="text-center pb-16">
                 <h2 className="text-3xl font-semibold pt-8">Popular Instructors Section</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-6 sm:gap-2 pb-12">
                    {
                      instructors.map((instructor,index) =><InstructorCard
                      key={instructor.index}
                        instructor={instructor}
                      >

                      </InstructorCard>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;