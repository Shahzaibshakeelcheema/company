import React ,{useState} from 'react'
import { Form } from 'react-bootstrap';
import AppNavBar from './AppNavBar';


const NumberList = (props) => {
  
    //const [numbers, setNumbers] = useState([]);
const {numbers ,setNumbers ,objs ,setObjs } = props;

//states of NumberList
const [input,setInput]= useState();
//const [inputForm,setInputForm]= useState(objs);  ////
//const [arrayObj , setarrayObj] = useState(props.objs)
//states 
//debugger
let value=input;
// let objValue = inputForm;



const handleinput =()=>{
//let value=numbers.length
  setNumbers([...numbers, value]);
}

    const handleClick = () => {
      let arrLength = numbers.length;
      arrLength = arrLength+1
      setNumbers([...numbers, arrLength]);
    };

    //////////////////////////////
    ////////////////////////////
    /////////////////////////////////////
    //////////////////////////////////
    
    const handleSubmit = (event) => {
      event.preventDefault();
      ////////AWAIS METHOD
      var empName = event.target.empName.value;
      var designation = event.target.designation.value;
      var id = event.target.id.value;
      let inputObject = {title: empName, post: designation, empId: id}
///////my //////CODEEEE///////
  //     const { id, empName, designation } = event.target;
  //     setInputForm([ ...inputForm, {post:id.value ,title: empName.value, post: designation.value }]);
  //  console.log(inputForm)
//alert(id)
      
      // let myObj = {title: inputForm}
  

      setObjs([...objs,inputObject]);
      // setObjs([...objs,inputForm]);
 
    }
    // const handleChange = (event) => {
    // const handleChange = (event) => {
    // const { name, value } = event.target;
    // setInputForm({ ...inputForm, [name]: value });
    //  };
    return (
      <div >
      <AppNavBar/><div className='d-flex justify-content-between'>
       <div > <h2>Number List</h2>
       <button onClick={handleClick}>Add Number</button>
       <ul>
         {numbers.map((number, index) => (
           <li key={index}>{number} +{index}</li>
         ))}
       </ul>
       <input placeholder="enter a number to be added"  onChange={e=>setInput(e.target.value) }/>
       <button  onClick={handleinput}>entered number</button>
       
       </div>
       {/* 
      /////NEXT////////////////////==//////////////
      ////////////DIV////////////=///=///////////// e=>setInputForm(e.target.value) 
      //////////////////START/////==///////////////
         */}
       <div>
       <h2>Object List</h2>
       <Form onSubmit={handleSubmit}>
       <label >Name : </label>
       <input placeholder="enter name" name="empName"  />
       
       <label >Post : </label>
       <select placeholder="MERN/ MEAN"  name="designation"  >
       <option value="MERN"> MERN </option>
       <option value="MEAN"> MEAN </option>
       <option value="JAVA"> JAVA </option>

       </select>
       
       <label >ID </label>
       <input placeholder="Employee ID" name="id" />
       <button type="submit">Submit</button>
       </Form>
       
              <ul>
       {objs.map((obj) => (
        
         <li key={obj.empId}>{obj.empId}   {obj.title}    {obj.post} </li>
         
       ))}
     </ul>
       </div>
       </div>
      </div>
    );
}

export default NumberList