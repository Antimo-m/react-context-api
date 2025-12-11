import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




function NoFound() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/prodotti")
        }, 5000)
        return () => clearTimeout(timer)
    }, []);





    return (
        <>
            <div className="text-center text-danger">
                <h3>Error 404: L'indirizzo da te cercato non è esistente</h3>
                <p >Verrai rispedito alla pagina prodotti tra 5 secondi.....</p>
            </div>
        </>
    )
}

export default NoFound