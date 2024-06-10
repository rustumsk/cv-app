import '../styles/phone/Lists.scss';
import '../styles/tablet/Lists.scss';
import '../styles/desktop/Lists.scss';
export default function EList({hasEducation,eList}){
    return(
        <>
        {hasEducation? (
            <div className="eL">
                <ul>
                    {eList.map(list =>{
                        return <li key={list.indexOf}>
                            {`${list.schoolName} Yr. ${list.schoolFrom}-${list.schoolTo}`}
                        </li>
                    })}
                </ul>
            </div>):(
                <div>
                    
                </div>
            )}

        </>
    )
}
