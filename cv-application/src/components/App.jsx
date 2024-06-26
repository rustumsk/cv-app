import NavBar from "./Navbar";
import Buttons from "./buttons";
import Inputs from "./inputs";
import React from "react";
import Cv from "./Cv";
import '../styles/desktop/containers.scss';
import { useState } from "react";

export default function App() {
    const [exArr, setExArr] = useState([]);
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
          <div className="in-cont">
            <NavBar 
              name={"CV APP"}
            />
            <Inputs 
                setFName={setFName}
                setLName={setLName}
                setEMail={setEMail}
                setNum={setNum}
                eArr={eArr}
                setEArr={setEArr}
                exArr={exArr}
                setExArr={setExArr}
            />
            <Buttons 
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="out-cont">
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
          </div>
      </React.StrictMode>
    );
  }