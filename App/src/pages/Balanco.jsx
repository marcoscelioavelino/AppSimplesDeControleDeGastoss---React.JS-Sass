import CardEntrada from "../components/CardEntrada"

const Balanco = ({ entradas, saidas }) => {

    const totalEntradas = entradas.reduce((soma, item) => {
        return soma + Number(item.value)
    }, 0)

    const totalSaidas = saidas.reduce((soma, item) => {
        return soma + Number(item.value)
    }, 0)

    const saldo = totalEntradas - totalSaidas

    return (

        <div className="balancoContainer">

            <h2>Balanço</h2>

            <div className="balancoContainerInfo">

                <div className="balancoContainerEntradas">
                    <h4>Entradas - R${totalEntradas} </h4>
                    <div className="cardsEntradasContainer">
                        {entradas.map((entrada, index) => (
                            <CardEntrada
                                key={entrada.id}
                                id={entrada.id}
                                index={index + 1}
                                title={entrada.title}
                                text={entrada.text}
                                value={entrada.value}
                                dataEntrada={entrada.date}
                                type={entrada}
                            />
                        ))}
                    </div>
                </div>

                <div className="balancoContainerSaidas">
                    <h4>Saídas - R${totalSaidas}</h4>

                    <div className="cardsEntradasContainer">
                        {saidas.map((saida, index) => (
                            <CardEntrada
                                key={saida.id}
                                id={saida.id}
                                index={index + 1}
                                title={saida.title}
                                text={saida.text}
                                value={saida.value}
                                dataEntrada={saida.date}
                                type='saida'
                            />
                        ))}
                    </div>
                </div>

                <div className="balancoContainerSaldo">
                    <h4>Saldo: R$ {saldo}</h4>
                </div>

            </div>

            <div className="cardsEntradasContainer">





            </div>

        </div>
    )
}

export default Balanco