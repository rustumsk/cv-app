import ACButtons from "./acButtons";
import { useState } from "react";

export default function EducList({eArr,setEArr,educ,handleClick,seteList,setHasEducation}){
    const [schoolName, setSchoolName] = useState("");
    const [schoolFrom, setSchoolFrom] = useState(" ");
    const [schoolTo, setSchoolTo] = useState(" ");
    const [course, setCourse] = useState(" ");


    function handleChange(e){
        setSchoolName(e.target.value)
        console.log(schoolName);
    }
    function handleSchool(e){
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        setSchoolFrom(year.toString());
        console.log(year);
    }
    function handleCourse(e){
        setCourse(e.target.value)
    }
    function handleSchoolTo(e){
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        setSchoolTo(year.toString())
        console.log(year);
    }
    function handleAdd(e) {
        e.preventDefault();
        seteList(prevState => [...prevState, {schoolName,schoolFrom,schoolTo}]);
        setEArr(prevState => [...prevState, {schoolName,schoolFrom,schoolTo,course}]);
        console.log(eArr)
        setHasEducation(true);
    }
    
    if(educ){
        return(
            <div className="ed-contain">
                <form action="">
                    <div className="u">
                        <label htmlFor="school">School Name</label>
                        <input type="text" name="school" id="school" onChange={handleChange} placeholder="Ex. University of Cebu"/>
                    </div>
                    <div className="cour">
                        <label htmlFor="course">Course</label>
                        <input type="text" name="course" id="course" onChange={handleCourse} placeholder="Ex. Computer Science" />
                    </div>
                    <div className="from">
                        <label htmlFor="start">From</label>
                        <input type="date" name="start" onChange={handleSchool} id="start" />
                    </div>
                    <div className="to">
                        <label htmlFor="start">To</label>
                        <input type="date" name="to" onChange={handleSchoolTo} id="to"/>
                    </div>
                    <ACButtons 
                        handleClick={handleClick}
                        handleAdd={handleAdd}
                        
                    />
                </form>
            </div>
        )
    }
    else{
        return null;
    }
}