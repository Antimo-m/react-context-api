import { createContext, useState} from "react";


const BudgetContext = createContext() //iniziamo creando il context, ora passiamo alla parte provider

function BudgetProvider ({children}) {
    const [budgetMode, setBudgetMode] = useState(false)
    const [budgetValue, setBudgetValue] = useState(null)

    const Valori = {
        budgetMode,
        setBudgetMode,
        budgetValue,
        setBudgetValue
    }

    return(

       < BudgetContext.Provider value={Valori}>
       {children}
       </BudgetContext.Provider>
        
    )
}

export {BudgetProvider, BudgetContext}