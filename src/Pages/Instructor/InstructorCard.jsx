import instructorImg from '../../assets/images/instortor.jpg'


const InstructorCard = ({ instructor }) => {
    const { name, image,email} = instructor
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">
                        {name}
                    </h2>
                    <h2 className="card-title text-2xl font-semibold">
                        {email}
                    </h2>
                    
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;