import { NavLink } from "react-router-dom"
import { BudgetContext } from "../Context/BudgetContext"
import { useContext } from "react"


function Header() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    return (
        <>
            <nav className="container d-flex aling-items-center gap-4 mt-3 py-2">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/prodotti">Prodotti</NavLink>
                <NavLink className="nav-link" to="/Chisiamo">Chi siamo</NavLink>


                <button
                    className="btn btn-primary btn-sm ms-auto"
                    onClick={() => setBudgetMode(prev => !prev)}> {/*funzione con operatore not per invertire i valori*/}
                    {budgetMode ? "Disattiva budget" : "Imposta budget"} {/*ternario per gestire il contenuto del bottone */}
                </button>



            </nav>



        </>
    )
}

export default Header