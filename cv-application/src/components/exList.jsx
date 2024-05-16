export default function ExList({hasExp,expList}){
    return(
        <>
        {hasExp? (
            <div className="eL">
                <ul>
                    {expList.map(list =>{
                        return <li key={list.indexOf}>
                            {`${list.cName} Yr. ${list.comFrom} - ${list.comTo}`}
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