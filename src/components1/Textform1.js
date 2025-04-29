import React,{useState} from 'react'


export default function TextForm(props) {

  
  const handle=()=>{
    console.log("Hello")
    setText(text.toUpperCase())
    props.showAlert("Text is converted to upper case","warning")
  }
  const handles=()=>{
    setText(text.toLowerCase())
    props.showAlert("Text is converted to lower case","warning")
  }
  const onchange=(event)=>{
    console.log("onchange")
    setText(event.target.value)
    
  }
  const handles1=()=>{
        setText(text.replace(text,""))
        props.showAlert("Text is cleared","danger")
  }
  
  const handles2=()=>{
     let a=document.getElementById("mybox");
     a.select()
     navigator.clipboard.writeText(a.value)
     props.showAlert("Text is copied","success")
   }
   
  const space=()=>{
    let b=text.split(/[ ]+/);
    setText(b.join(" "))
    props.showAlert("Text is copied","success")
} 
  const [text,setText] = useState("enter your text");

  return (
    <>
    <div className="container">
   
<div className="mb-3">
  <h1 className="text-warning"><u>{props.heading}</u></h1>
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control border border-primary border-3" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} value={text} id="mybox" rows="8" onChange={onchange}></textarea>
  
</div>

<button className={`btn btn-${props.mode1} my-2 mx-1 btn-sm`} onClick={handle}>Convert to Uppercase</button>
<button className={`btn btn-${props.mode1} my-2 mx-1 btn-sm`} onClick={handles}>Convert to lowercase</button>
<button className={`btn btn-${props.mode1} my-2 mx-1 btn-sm`} onClick={handles1}>Clear</button>
<button className={`btn btn-${props.mode1} my-2 mx-1 btn-sm`} onClick={handles2}>Copy</button>
<button className={`btn btn-${props.mode1} my-2 mx-1 btn-sm`} onClick={space}>Remove extra space</button>

</div>



 <div className='container my-3'>
  <h2 className='text-primary'> <u>Your text Summary.</u> </h2>
  
  
  <p className={`text-${props.mode==="light"?"dark":"light"}`}> {(text.length>0)?(text.split(" ")).filter(element=>element!=="").length:0} words, {text.length} characters and Time taken to read is {0.008*(text.split(" ")).length} minutes</p> 
  
  
  <h2 className="text-success"><u>Preview.</u></h2>
  <p className={`text-${props.mode==="light"?"dark":"light"}`}>{text.length>0?text:"Enter something to preview here."}</p>
  
  </div>  
 </>
  )
}
