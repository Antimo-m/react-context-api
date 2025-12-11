import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DettagliProdotto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [prodotto, setProdotto] = useState(null);

    function goPrev() {
        Number(id) > 1 ? navigate(`/prodotti/${Number(id) - 1}`) : null; //funzione in cui navighiamo tra i prodotti con navigate poi prendiamo l'id del prodotto corrente lo decrementiamo di 1 e usiamo navigate per spostarci alla pagina del precedente prodotto, in un ternario dove iniziamo con il dire che la funzione funzionera solo se l'id è superiore a 1, se è sotto 1 restituiamo null cosi da bloccare il bottone
    }
    const goNext = () => {
      Number(id )<20 ?  navigate(`/prodotti/${Number(id) + 1}`) : null; //funzione uguale a quella di prima solo che questa volta incrementiamo, impostiamo sempre che la funzione funzionerà solamente se l'id corrente non supera i 20.
    }



    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                if (!resp.data.id) {
                    navigate("/notfound");       //controllo dove verifichiamo se il prodotto ha un id e se il prodotto non ha un id allora non esiste e dunque lo catturiamo e mostriamo la pagina noFound
                    return;     //blocchiamo l'esecuzione del codice
                }

                setProdotto(resp.data);
            })
            .catch((err) => {
                console.log(err)
                navigate("/NoFound") //catturiamo l'errore e lo facciamo navigare verso la pagina errore
            })
    }, [id, navigate]);

    return (
        <>
            {prodotto !== null ? (
                <div className="d-flex justify-content-center text-center">
                    
                    <div className="card" style={{ width: "500px" }}>
                        <img
                            src={prodotto.image}
                            className="card-img-top bg-danger"
                            alt={prodotto.title}
                            style={{ height: "150px", objectFit: "contain" }}
                        />
                        <div className="card-body border border-2">
                            <h5 className="card-title">
                                Nome Prodotto:
                                {prodotto.title}
                            </h5>

                            <p className="card-text">
                                <span className="text-danger"> Prezzo:</span>  {prodotto.price}$
                            </p>

                            <p className="card-text">
                                <span className="text-danger"> Categoria:</span>  {prodotto.category}
                            </p>

                            <p className="card-text">
                                <span className="text-danger"> Descrizione prodotto:</span>   {prodotto.description}
                            </p>


                            <p className="card-text">
                                <span className="text-danger"> Rating di questo Prodotto:</span>{prodotto.rating.rate} ({prodotto.rating.count})
                            </p>
                        </div>
                    </div>
                </div>)
                : ""}

            <div className="d-flex gap-3 justify-content-center py-3">
                <button
                    onClick={goPrev}
                    className="btn btn-sm btn-danger"
                >Torna indietro</button>

                <button
                onClick={goNext}
                className="btn btn-primary"
                >Vai Avanti</button>
            </div >


        </>
    )
}

export default DettagliProdotto;