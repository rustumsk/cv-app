import '../styles/phone/cv.scss';
import '../styles/tablet/cv.scss';
import '../styles/desktop/cv.scss';

export default function Cv({fName,lName,email,num,eArr,exArr}){
    return(
        <div className="cv-container">
            <header className="eN">
                <span>Personal Details</span>
            </header>
            <div className ="Name">
                <span>{`-${fName + " " + lName}`}</span>
            </div>
            <div className ="Email">
                <span>{email}</span>
            </div>
            <div className ="Num">
                <span>{num}</span>
            </div>
            <header className="eN">
                <span>Education</span>
            </header>
            <ul className="educs">
                {eArr.map(educ =>{
                    return <li key={educ.indexOf}>
                        <span>{educ.schoolName}</span>
                        <p>{educ.course}</p>
                    </li>
                })}
            </ul>
            <header className="eN">
                <span>Experience</span>
            </header>
            <ul className="educs">
                {exArr.map(experience =>{
                    return <li key={experience.indexOf}>
                        <span>{experience.schoolName}</span>
                        <p>{experience.course}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}