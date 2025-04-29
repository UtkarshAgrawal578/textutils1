import logo from './logo.svg';
import './App.css';
import Navbar1 from './components1/Navbar1';
import Textform1 from './components1/Textform1';
//import About1 from './components1/About1';
import Alert1 from './components1/Alert1';
//import React from "react";
import React,{useState} from 'react';

function App() {
  
    const [mode,setDarkMode]=useState("light");
    const [alert,setAlert]=useState(null);
    const [mode1,setMode1]=useState("light");
  
    const toggleMode1=()=>{
            if(mode1==="light"||"#0d6efd"||"#2bb617"||"#b6172d"||"#b6172d"){
            setMode1("primary")
            document.body.style.backgroundColor="#0d6efd"
            }
    }
    const toggleMode2=()=>{
      if(mode1==="light"||"#0d6efd"||"#2bb617"||"#b6172d"||"#b6172d"){
      setMode1("success")
      document.body.style.backgroundColor="#2bb617"
      }
    }
    const toggleMode3=()=>{
      if(mode1==="light"||"#0d6efd"||"#2bb617"||"#b6172d"||"#b6172d"){
         setMode1("danger")
         document.body.style.backgroundColor="#b6172d"
      }
    }
    const toggleMode4=()=>{
      if(mode1==="light"||"#0d6efd"||"#2bb617"||"#b6172d"||"#b6172d"){
        setMode1("warning")
         document.body.style.backgroundColor="#b6a217"
      }
    }
    const showAlert=(message,type)=>{
            setAlert({
              msg:message,
              type:type
            })
            setTimeout(()=>{
              setAlert(null);
            },1500);
    }
    const toggleMode=()=>{
      if(mode==="light"){
        setDarkMode('dark')
        document.body.style.background="#0c1d35"
        showAlert("Dark mode has been enabled","success")
        setInterval(() => {
          document.title="Text-utils is amazing"
          },2000)
        setInterval(() => {
           document.title="Text-utils is created by utkarsh agrawal"
        },1500);  
        ;
      }
      else{
        setDarkMode("light")
        document.body.style.backgroundColor="white"
        showAlert("Light mode has been enabled","success")
      }
    }
   
  
    return (
      <>
      <div className="border border-4 border-danger min-vh-100">
      
     <Navbar1 title="Textutils" About="About us" mode={mode} toggleMode={toggleMode} mode1={mode1} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode4={toggleMode4}/>
    
     {/* <RouterProvider router={router}/> */}
      <Alert1 alert={alert}/>  
    <div className="container mt-3">  
    
    <Textform1 heading="Enter text to analyze." mode={mode} showAlert={showAlert} mode1={mode1}/>
      {/* <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/" element={<TextForm heading="Enter text to analyze." mode={mode} showAlert={showAlert} mode1={mode1}/>} />
    </Routes>
       */}
     </div> 
     
  </div>
   </>
  );}


export default App;
