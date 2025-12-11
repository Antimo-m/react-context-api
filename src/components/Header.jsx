import { NavLink } from "react-router-dom"

function Header () {
    return (
        <>
            <nav className=" ">
                <div className="container d-flex gap-3 py-3 ">
                    <NavLink className="nav-link"  to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/prodotti">Prodotti</NavLink>
                    <NavLink className="nav-link" to="/Chisiamo">Chi siamo</NavLink>
                    </div>
                
            </nav>


      
        </>
    )
}

export default Header