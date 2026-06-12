import { NavLink } from "react-router-dom"

function Navbar() {
    return(
        <nav>
            <NavLink to="/home">Início</NavLink>
            <NavLink to="/characters">Personagens</NavLink>
            <NavLink to="/spells">Feitiços</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    )
}

export default Navbar