import NavBar from "./Navbar";
import Buttons from "./buttons";
import Inputs from "./inputs";
import React from "react";
import Cv from "./Cv";
import { useState } from "react";

export default function App() { 
    const [exArr,setExArr] = useState([]);
    const [eArr,setEArr] = useState([]);
    const [fName,setFName] = useState("Rustum");
    const [lName,setLName] = useState("Arellano");
    const [email,setEMail] = useState("rustumarellano@gmail.com");
    const [num,setNum] = useState("Something Bro");
    function handleSubmit(e){
      e.preventDefault();
      console.log("Hello");
    }
    return (
      <React.StrictMode>      
        <NavBar 
          name={"CV APP"}
        />
        <Inputs 
            setFName={setFName}
            setLName={setLName}
            setEMail={setEMail}
            setNum={setNum}
            exArr={exArr}
            eArr={eArr}
            setEArr={setEArr}
            setExArr={setExArr}
        />
        <Buttons 
          handleSubmit={handleSubmit}
        />
        <NavBar 
          name={"CV"}
        />
        <Cv 
          fName={fName}
          lName={lName}
          email={email}
          num={num}
          eArr={eArr}
          exArr={exArr}
        />
      </React.StrictMode>
    );
  }