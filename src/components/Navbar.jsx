import { Navlink } from "react-router-dom"

function Navbar() {
    return(
        <div>
            <NavLink>Início</NavLink>
            <NavLink>Personagens</NavLink>
            <NavLink>Casas</NavLink>
            <NavLink>Feitiços</NavLink>
        </div>
    )
}