import '../styles/phone/navBar.scss';
import '../styles/tablet/navBar.scss';
import '../styles/desktop/navBar.scss';



export default function NavBar({name}) {
    return(
        <>
            <header className="head">{name}</header>
        </>
    )
}