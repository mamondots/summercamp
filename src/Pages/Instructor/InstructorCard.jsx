import instructorImg from '../../assets/images/instortor.jpg'


const InstructorCard = ({ instructor }) => {
    const { name, image, numClasses, classes } = instructor
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='' src={instructorImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">
                        {name}
                    </h2>
                    <p>Number of Classes : {numClasses}</p>
                    <div className="card-actions justify-end">
                       {
                        classes.map(item => <p className='btn btn-outline w-10'>{item}</p>)
                       }
                    </div>
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;