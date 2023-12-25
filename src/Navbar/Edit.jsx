import React, { useContext } from 'react'
import ContextData from './Cotextdata'
import { useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {
    const Datacontext=useContext(ContextData)
    const index=useLocation().state.data
    const navigate=useNavigate()

    const newData={
        name:Datacontext.data[index].name,
        batch:Datacontext.data[index].batch,
        age:Datacontext.data[index].age,
        course:Datacontext.data[index].course
        
    }
    const handleChange=(e)=>{
        newData[e.target.name] = e.target.value
    }

    const handleSubmit=()=>{
            Datacontext.data[index] =newData;
            navigate(-1);
    }
  return (
    <div>
       <h1 className='Student'>EDIT STUDENT</h1>
       <div className="Form">
      <label htmlFor="">Name : </label>
      <input type="text" onChange={handleChange} name='name' placeholder={Datacontext.data[index].name}/><br />
      <label htmlFor="">Batch : </label>
      <input type="text" onChange={handleChange} name='batch' placeholder={Datacontext.data[index].batch}/><br />
      <label htmlFor="">Age : </label>
      <input type="number" onChange={handleChange} name='age' placeholder={Datacontext.data[index].age}/><br />
      <input type="text" onChange={handleChange} name='course' placeholder={Datacontext.data[index].course}/>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Edit
