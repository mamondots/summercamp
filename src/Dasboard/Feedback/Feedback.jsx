import Swal from "sweetalert2";


const Feedback = () => {

 
    const handleFeedback = event =>{
        event.preventDefault()
        const form = event.target
        const feedback = form.feedback.value
        const allFeedback = {feedback}
        console.log(allFeedback)
        fetch('http://localhost:5000/feedbacks',{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(allFeedback)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          if(data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'User added successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
      })
     
      
    }
    return (
        <div>
            <form onSubmit={handleFeedback}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add Your Feedback</span>
                    </label>
                    <input type="text" name='feedback' placeholder="Write here" className="input input-bordered" />
                </div>
               
                <input className="mt-5" type="submit" value="Add Feedback" />
            </form>
        </div>
    );
};

export default Feedback;