import React, { useState } from 'react'

export default function FormText(props) {
    const handleOnChange = (e)=>{
        // console.log("on change");
        setText(e.target.value);
       }
   const handleClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
     handleOnChange(setText);
   }
   
    const [text , setText] = useState("");
  return (
    <> 
    <h1>{props.heading}</h1>
      <form>
  <div className="mb-3">
     <textarea className="form-control " id = "myBox" rows = "8" value={text} onChange= {handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleClick}> convert to UpperCase</button>

</form>
    </>
  )
}



