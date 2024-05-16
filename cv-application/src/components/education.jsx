import { useState} from "react"
import EducList from "./educList";
import EList from "./eList";

export default function Education({eArr,setEArr}){
    const [eList, seteList] = useState([]);
    const [educ,setEduc] = useState(false);
    const [hasEducation, setHasEducation] = useState(false);

    function handleClick(e){
        e.preventDefault();
        const notEduc = !educ;
        setEduc(notEduc);
        console.log(notEduc)
    }
    return(
        <>
            <div className="ed">
                <span className="e-text">Education</span>
                <span className="e-icon" onClick={handleClick}></span>
            </div>
            <EList 
                hasEducation={hasEducation}
                eList={eList}
            />
            <EducList
                eArr={eArr}
                setEArr={setEArr}
                educ={educ}
                setEduc = {setEduc}
                handleClick={handleClick}
                eList={eList}
                seteList={seteList}
                setHasEducation={setHasEducation}
            />
        </>
    )
}