import img from '../../../assets/images/pexels-rdne-stock-project-8034585.jpg'


const ClassCard = ({ item }) => {
    const {name,image,available_seats,price} = item
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='text-xl font-semibold'>Available_Seats : {available_seats}</p>
                    <p className='text-xl font-medium'>price : ${price}</p>
                    <div className="card-actions w-full">
                        <button className="btn btn-primary w-full">Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;