
import CardEntrada from "../components/CardEntrada"

const Entradas = () => {

    return (

        <div className="entradasContainer">

            <div className="headerEntradasContainer">

                <div className="topHeaderEntradasContainer">

                    <div className="textTopHeaderEntradas">
                        <h1>Gerenciamento de entradas</h1>
                        <input type="text" placeholder="Procurar entrada" />
                    </div>

                </div>

                <div className="bottomHeaderEntradasContainer">

                    <button>
                        <div>+</div>
                        Nova Entrada
                    </button>

                </div>

            </div>

            <div className="cardsEntradasContainer">

                <CardEntrada />

            </div>

            <div className="totalEntradasContainer">
                <h4>Total de entradas:</h4>
                <p>R$ 100000</p>
            </div>

        </div>
    )

}


export default Entradas