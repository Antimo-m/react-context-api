import { NavLink } from "react-router-dom"
import { BudgetContext } from "../Context/BudgetContext"
import { useContext } from "react"


function Header() {

    const { budgetMode, setBudgetMode, budgetValue, setBudgetValue } = useContext(BudgetContext)
    
    function TargetValue(event) {
        setBudgetValue(Number(event.target.value));
    }

    return (
        <>
            <nav className="container d-flex aling-items-center gap-4 mt-3 py-2">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/prodotti">Prodotti</NavLink>
                <NavLink className="nav-link" to="/Chisiamo">Chi siamo</NavLink>

                <div className=" ms-auto d-flex align-items-center gap-2 ">
                    <label className="form-label" htmlFor="budget"></label>
                    <input
                    className="form-control w-50"
                        id="budget"
                        onChange={TargetValue}
                        value={budgetValue ?? ""}
                        type="number"
                        min="1"
                        placeholder="Inserisci il tuo budget"
                        disabled={!budgetMode}
                    >
                    </input>
            
                <button
                    className="btn btn-primary btn-sm "
                    onClick={() => setBudgetMode(prev => !prev)}> {/*funzione con operatore not per invertire i valori*/}
                    {budgetMode ? "Disattiva budget" : "Imposta budget"} {/*ternario per gestire il contenuto del bottone */}
                </button>
                </div>



            </nav>



        </>
    )
}

export default Header