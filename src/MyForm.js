import React ,{useState} from 'react'
import TableUser from './TableUser';


const MyForm = () => {
  const initialFormData = { name:'', email: '',password:'', role: '',gender:'' }
  const [MyUser, setMyUser] = useState({initialFormData});
 // const MyUser2 = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log(MyUser);
    //MyUser2 = [...MyUser]
    //setMyUser((initialFormData))
  };

  const handleChange = (event) => {
    //console.log('i am here')
    //console.log(event.target)
    const { name, value,type,checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;


    setMyUser((prevMyUser) => ({
      ...prevMyUser,
      [name]: newValue,
    }));
    console.log(MyUser)
    
  };

  return (
 <div className='d-flex d-flex-column justify-content-evenly'>
 <div><form onSubmit={handleSubmit}>

 <fieldset>
   <div className="form-group">
   <h2>Sign up</h2>

     <label htmlFor="fName" className="form-label mt-4">Enter Full Name : </label>
     <input type="text" className="form-control"  placeholder="Enter email" name="name" value={MyUser.name} required onChange={handleChange}/>
     <small id="nameHelp" className="form-text text-muted">Please avoid Special characters like @ / . , ; " + - _ # $ % ^ & * </small>
   </div>
   <div className="form-group">
     <label htmlFor="mail" className="form-label mt-4">Email address : </label>
     <input type="email" className="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={MyUser.email} required onChange={handleChange}/>
     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
     <label htmlFor="pass" className="form-label mt-4">Password : </label>
     <input className="form-control" id="pass" placeholder="Password" type="password" name="password" value={MyUser.password} onChange={handleChange} required/>
   </div>
   <div className="form-group">
     <label htmlFor="dropdown" className="form-label mt-4">Sign Up As : </label>
     <select className="form-select " id="dropdown" name="role" value={MyUser.role} required onChange={handleChange}>
     <option value=" " className='bg-success'>Choose Role</option>

     <option value="Project Manager" className='bg-success' defaultChecked>Project Manager</option>
       <option value="CTO" className='bg-success'>CTO</option>
       <option value="Team Lead" className='bg-warnig'>Team Leader</option>
       <option value="Sn. Developer" className='bg-info'>Sn. Developer</option>
       <option value="Internee" className='bg-danger'>Internee </option>
     </select>
   </div>
   <div className="form-check d-flex justify-content-evenly mt-2 mb-2">
     <div className='form-check'>
       <input className="form-check-input" type="radio" name="gender" id="Radios1" value="Male" checked={MyUser.gender==='Male'} onChange={handleChange} />
       <label className="form-check-label" htmlFor="Radios1">Male </label>
     </div>
   <div className='form-check'>
       <input className="form-check-input" type="radio" name="gender" id="Radios2" value="Female" checked={MyUser.gender==='Female'} onChange={handleChange}/>
       <label className="form-check-label" htmlFor="Radios2">Female </label>

     </div>
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>

   </fieldset>
   </form>
   </div>
    <div>
    <h2>Registered Users </h2>
    <TableUser MyUser={MyUser}/>
    </div>
    </div>

 
  );}

export default MyForm