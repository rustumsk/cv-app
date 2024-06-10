import { useState } from "react"
import ExpList from "./expList";
import ExList from "./exList";
export default function Experience({exArr,setExArr}){
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
                exp={exp}
                handleClick={handleClick}
                setExpList={setExpList}
                setHasExp={setHasExp}
                hasExp = {hasExp} 
                exArr={exArr}
                setExArr={setExArr}
            />
        </>
    )
}