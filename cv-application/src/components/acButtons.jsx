import '../styles/phone/acButtons.scss';

//Add and Cancel buttons for the education and experience components.
export default function ACButtons({handleAdd,handleClick}){

    return(
        <section className="acButtons">
            
            <div>
                <button className="ad" onClick={handleAdd}>Add</button>
            </div>
            <div>
                <button className="can" onClick={handleClick}>Cancel</button> 
            </div>
        </section>
    )
}