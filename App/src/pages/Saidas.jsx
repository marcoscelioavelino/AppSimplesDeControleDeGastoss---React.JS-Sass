import { useState, useEffect } from "react"
import CardEntrada from "../components/CardEntrada"
import FormAdd from "../components/FormAdd"

const Saidas = () => {

    const [addForm, setAddForm] = useState(false)
    const [saidas, setSaidas] = useState(() => {
        const saidasSalvas = localStorage.getItem('saidas')
        return (saidasSalvas) ? JSON.parse(saidasSalvas) : []
    })

    const totalSaidas = saidas.reduce((somaSaidas, valor) => {
        return somaSaidas + Number(valor.value)
    },0) 

    const addSaida = (novaSaida) => {
        setSaidas([...saidas, novaSaida])
    }

    const del = (id) => {
        setSaidas(prev=> prev.filter(response => response.id !== id))
    } 

        useEffect(() => {
        localStorage.setItem('saidas', JSON.stringify(saidas))
    }, [saidas])

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

                    <button className="btAddSaida" onClick={()=> setAddForm(true)}>
                        <div>+</div>
                        Adicionar saída
                    </button>

                </div>

            </div>

            <div className="cardsEntradasContainer">

                {addForm === true &&
                    <FormAdd
                        fechar={() => setAddForm(false)}
                        onAdd={addSaida}
                    />}

                {
                    (saidas.length === 0) ?
                        <p>Nenhuma saída registrada</p> :

                        saidas.map((saida, index) => (
                            <CardEntrada
                                id={saida.id}
                                index={index + 1}
                                title={saida.title}
                                text={saida.text}
                                value={saida.value}
                                dataEntrada={saida.date}
                                onDelete={del}
                                type='saida'
                            />
                            
                        ))
                }

            </div>

            <div className="totalEntradasContainer">
                <h4>Total de saídas:</h4>
                <p>{totalSaidas}</p>
            </div>

        </div>
    )

}

export default Saidas