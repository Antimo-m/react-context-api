import axios from "axios";
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom";
import { BudgetContext } from "../Context/BudgetContext";


function Prodotti() {
    const [prodotti, setProdotti] = useState([])
    const  {budgetMode, budgetValue} = useContext(BudgetContext)

    const ProdottiFiltrati = budgetMode && budgetValue ? prodotti.filter((p) => p.price <=budgetValue) : prodotti;

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=20")
            .then((resp) => {

                setProdotti(resp.data)
                console.log(resp.data);
            })
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                {ProdottiFiltrati.map((prodotto) => (
                    
                    <div className="card" key={prodotto.id} style={{ width: "250px" }}>
                        <img
                            src={prodotto.image}
                            className="card-img-top py-2"
                            alt={prodotto.title}
                            style={{ height: "150px", objectFit: "contain" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {prodotto.title}
                            </h5>
                            <p className="card-text">
                                ${prodotto.price}
                            </p>
                            <p className="card-text">
                                {prodotto.category}
                            </p>
                        </div>
                        <>
                            <div className="text-center mb-3">
                                <Link className="btn btn-primary" to={`/prodotti/${prodotto.id}`}>Dettagli</Link>  {/* qui siamo andati a dare un link dinamico a tutti i prodotti tramite id del singolo prodotto per costruire l'url della pagina dettaglio */}
                            </div>
                        </>
                       
                    </div>


                ))}
            </div>



        </>
    )
}

export default Prodotti