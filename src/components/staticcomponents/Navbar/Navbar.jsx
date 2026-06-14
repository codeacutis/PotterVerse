import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <nav className='navbar'>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Início</NavLink>
            <NavLink to="/characters" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Personagens</NavLink>
            <NavLink to="/spells" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Feitiços</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sobre</NavLink>
        </nav>
    )
}

export default Navbar
