import '../styles/phone/inputs.scss';
import '../styles/tablet/inputs.scss';
import '../styles/desktop/inputs.scss';
import Educ from './education'
import Exp from './experience'
export default function Inputs({setFName,setLName,setEMail,setNum,eArr,setEArr,exArr,setExArr}){
    
    function handleNum(e){
        setNum(e.target.value);
    }
    function handleEmail(e){
        setEMail(e.target.value);
    }
    function handleFName(e){
        setFName(e.target.value)
    }
    function handleLName(e){
        setLName(e.target.value)
    }
    return(
        <section className="in-container">
            <form action="">
                <div className='f-name'>
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" name="first-name" onChange={handleFName} id="first-name" placeholder="Ex. Juan"/>
                </div>
                <div className='l-name'>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" id="last-name" onChange={handleLName} placeholder="Ex. Dela Cruz"/>
                </div>
                <div className='e'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="mail" id="email" onChange={handleEmail} placeholder="Ex. JuanDelaCruz@gmail.com"/>
                </div>
                <div className='num'>
                    <label htmlFor="number">Number: </label>
                    <input type="tel" name="number" id="number" onChange={handleNum} placeholder="Ex. 09164445004"/>
                </div>
                <Educ 
                    eArr={eArr}
                    setEArr={setEArr}
                />
                <Exp 
                    exArr={exArr}
                    setExArr={setExArr}
                />
            </form>
        </section>
    )
}