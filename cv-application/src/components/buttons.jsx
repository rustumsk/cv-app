import '../styles/phone/buttons.scss';
import '../styles/tablet/buttons.scss';
import '../styles/desktop/buttons.scss';
export default function Buttons(){
    const fNameInput = document.querySelector("#first-name");
    const lNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const numInput = document.querySelector("#number");
    function handleSubmit(e){
        e.preventDefault();
        fNameInput.disabled = true;
        lNameInput.disabled = true;
        emailInput.disabled = true;
        numInput.disabled = true;
    }
    function handleEdit(e){
        e.preventDefault();
        fNameInput.disabled = false;
        lNameInput.disabled = false;
        emailInput.disabled = false;
        numInput.disabled = false;
    }
    return(
        <section className="btns">
            <div><button className="submit" onClick={handleSubmit}>
                Submit
                </button>
            </div>
            <div><button className="edit" onClick={handleEdit}>
                Edit
                </button>
            </div>
        </section>
    )
}