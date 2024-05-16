import { useState } from "react";
import ACButtons from "./acButtons";

export default function ExpList({exArr,setExArr,exp,handleClick,setExpList,setHasExp}){
    const [cName,setCName] = useState("");
    const [comFrom, setComFrom] = useState("");
    const [comTo, setComTo] = useState(""); 
    const [position,setPosition] = useState("");
    const [respon, setRespon] = useState("");

    function handleRespon(e){
        setRespon(e.target.value)
    }
    function handlePosition(e){
        setPosition(e.target.value)
    }
    function handleCChange(e){
        setCName(e.target.value);
    }
    function handleFromChange(e){
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        setComFrom(year);
    }
    function handleToChange(e){
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        setComTo(year);
    }
    function handleAdd(e) {
        e.preventDefault();
        setExpList(prevState => [...prevState, {cName,comFrom,comTo}]);
        setExArr(prevState => [...prevState, {cName,comFrom,comTo,position,respon}])
        console.log(exArr)
        setHasExp(true);
    }
    if(exp){
        return(
            <div className="ex-contain">
                <form action="">
                    <div className="c">
                        <label htmlFor="c-name">Company Name</label>
                        <input type="text" name="c-name" id="c-name" onChange={handleCChange} placeholder="Ex. University of Cebu"/>
                    </div>
                    <div className="p">
                        <label htmlFor="pos">Position or Title</label>
                        <input type="text" name="pos" id="pos" onChange={handlePosition} placeholder="Ex. Manager." />
                    </div>
                    <div className="r">
                        <label htmlFor="res">Responsibilites</label>
                        <input type="text" name="res" id="res" onChange={handleRespon} placeholder="Ex. Handle the development of websites." />
                    </div>
                    <div className="from">
                        <label htmlFor="start">From</label>
                        <input type="date" name="start" onChange={handleFromChange} id="start" />
                    </div>
                    <div className="to">
                        <label htmlFor="start">To</label>
                        <input type="date" name="to" onChange={handleToChange} id="to"/>
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