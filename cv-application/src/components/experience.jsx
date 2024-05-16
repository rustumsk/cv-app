import { useState } from "react"
import ExpList from "./expList";
import ExList from "./exList";
export default function Experience(exArr,setExArr,handleSubmit){
    const [exp,setExp] = useState(false);
    const [expList, setExpList] = useState([]);
    const [hasExp,setHasExp] = useState(false);


    function handleClick(e){
        e.preventDefault();
        const notExp = !exp;
        setExp(notExp);
        console.log(notExp)
    }
    
    return(
        <>
            <div className="ex">
                <span className="e-text">Experience</span>
                <span className="e-icon" onClick={handleClick}></span>
            </div>
            <ExList 
                hasExp={hasExp}
                expList={expList}
            />
            <ExpList
                exArr={exArr}
                setExArr={setExArr}
                handleSubmit={handleSubmit}
                exp={exp}
                handleClick={handleClick}
                expList = {expList}
                setExpList={setExpList}
                setHasExp={setHasExp}
                hasExp = {hasExp}
            />
        </>
    )
}