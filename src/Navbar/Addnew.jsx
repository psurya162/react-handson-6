import React, { useContext } from 'react'
import ContextData from './Cotextdata'
import { useNavigate } from 'react-router-dom'

const Addnew = () => {

    const DataContext=useContext(ContextData)
    const navigate =useNavigate()

    const newObj=[{
        name:"",
        batch:"",
        age:"",
        course:"",
    }]

    const handleChange=(e)=>{
            newObj[e.target.name] = e.target.value
    }

    const handleSubmit=()=>{
        DataContext.data.push(newObj)
        navigate(-1);
        
    }
  return (
    <div>
       <h1 className='Student'>ADD NEW STUDENT</h1>
      <div className="Form">
       
      <label htmlFor="">Name : </label>
      <input type='text' placeholder='Enter Name' onChange={handleChange} name='name'/><br />
      <label htmlFor="">Batch : </label>
      <input type='text' placeholder='Enter batch' onChange={handleChange} name='batch'/><br />
      <label htmlFor="">Age : </label>
      <input type='number' placeholder='Enter age' onChange={handleChange} name='age'/><br />
      <label htmlFor="">Course : </label>
      <input type='text' placeholder='Enter Course' onChange={handleChange} name='course'/><br />
      <button onClick={handleSubmit}>Submit</button>
      </div>
     
      
    </div>
  )
}

export default Addnew
