import React,{useState} from 'react'
import AppNavBar from './AppNavBar'
import './Style.css'
export const Contact = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send the form data to the server
    console.log('Email:', email);
    console.log('Comment:', comment);
    // clear the form after submission
    setEmail('');
    setComment('');}
  return (
    <div>
    <AppNavBar/>
   <div>
   <div className='contact'>
     <h2>Contact Us</h2>
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="email"
           className="form-control"
           id="email"
           value={email}
           onChange={e => setEmail(e.target.value)}
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="comment">Comment</label>
         <textarea
           className="form-control"
           id="comment"
           rows="3"
           value={comment}
           onChange={e => setComment(e.target.value)}
           required
         ></textarea>
       </div>
       <button type="submit" className="btn btn-primary">
         Submit
       </button>
     </form>
   </div>
   </div>
    </div>
  )
}

