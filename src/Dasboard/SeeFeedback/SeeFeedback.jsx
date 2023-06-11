import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const SeeFeedback = () => {
    const { id } = useParams()
   const [feedbacks, setFeedbacks] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/feedbacks/${id}`)
        .then(res => res.json())
           .then(data => {
                console.log(data)
                setFeedbacks(data)
           })
   },[])

   //const feedbacks = useLoaderData()
   //console.log(feedbacks)
   //const {feedback} = feedbacks

    return (
        <div>

           <h2>this demo {feedbacks.feedback}</h2>
            
           
        </div>
    );
};

export default SeeFeedback;