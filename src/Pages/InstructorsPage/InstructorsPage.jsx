
import useInstructor from "../../Hooks/useInstructor";
import InstructorsPageCard from "./InstructorsPageCard";


const InstructorsPage = () => {
    const [instructor] = useInstructor()
    const popular = instructor.filter(item => item.role ==='instructor');
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 pt-28 pb-2 ">
            <div className="bg-[#570DF8] p-12">
                <p className="text-white">Here All Instructors</p>
                <h2 className="text-white text-3xl font-bold pt-1">Join With Your Favarit Instructors</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 sm:gap-2 gap-2 pt-12">
                 
            {
                      popular.map(instructor =><InstructorsPageCard
                      key={instructor._id}
                        instructor={instructor}
                      >

                      </InstructorsPageCard>)  
                    } 
                 
            </div>

        </div>
    );
};

export default InstructorsPage;