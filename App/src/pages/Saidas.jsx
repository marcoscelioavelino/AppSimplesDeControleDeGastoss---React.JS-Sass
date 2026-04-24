import CardEntrada from "../components/CardEntrada"

const Saidas = () => {

    return (

        <div className="entradasContainer">

            <div className="headerEntradasContainer">

                <div className="topHeaderEntradasContainer">

                    <div className="textTopHeaderEntradas">
                        <h1>Gerenciamento de saídas</h1>
                        <input type="text" placeholder="Procurar saída" />
                    </div>

                </div>

                <div className="bottomHeaderEntradasContainer">

                    <button>
                        <div>-</div>
                        Nova saída
                    </button>

                </div>

            </div>

            <div className="cardsEntradasContainer">

                <h1>AQUI É O CARD</h1>

            </div>

            <div className="totalEntradasContainer">
                <h4>Total de saídas:</h4>
                <p>R$ 100000</p>
            </div>

        </div>
    )

}

export default Saidas