import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submitted, setSubmitted]=useState([])
  const [errors, setErrors]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
function handleSubmit(e){
  e.preventDefault()
  if(firstName.length>0){
     const formData={
    firstName:firstName,
    lastName:lastName 
    } 
  const dataArray=[...submitted, formData]
  setSubmitted(dataArray)
  }else{
    setErrors(['Please provide a first name!'])
  }
 
 
}
const Submissions=submitted.map((data, index)=>{
return(
  <div key={index}>
<h1>{data.firstName}</h1>
<h2>{data.lastName}</h2>
  </div>
)
})
const theError=errors.map((error, index)=><p key={index}>{error}</p>
)
  return (
    <>
       <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h1>{Submissions}</h1>
    <p color="red">{theError}</p>
    </>
   
    
  );
}

export default Form;
