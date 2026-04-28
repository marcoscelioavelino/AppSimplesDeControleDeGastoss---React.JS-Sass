
import { useState, useEffect } from "react"
import CardEntrada from "../components/CardEntrada"
import FormAdd from "../components/FormAdd"

const Entradas = () => {

    const [addForm, setAddForm] = useState(false)

    const [entradas, setEntradas] = useState(() => {
        const entradasSalvas = localStorage.getItem('entradas')
        return (entradasSalvas) ? JSON.parse(entradasSalvas) : []
    })

    const totalEntradas = entradas.reduce((somaValores, valorEntrada)=> {
        return somaValores + Number(valorEntrada.value)
    },0)



    const addEntrada = (novaEntrada) => {
        setEntradas([...entradas, novaEntrada])
    }

    const del = (id) => {
        setEntradas(prev => prev.filter(response => response.id !== id))
    }

    useEffect(() => {
        localStorage.setItem('entradas', JSON.stringify(entradas))
    }, [entradas])



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

                    <button onClick={() => setAddForm(true)}>
                        <div>+</div>
                        Adicionar Entrada
                    </button>

                </div>

            </div>


            <div className="cardsEntradasContainer">

                {addForm === true &&
                    <FormAdd
                        fechar={() => setAddForm(false)}
                        onAdd={addEntrada}
                    />}

                {
                    (entradas.length === 0) ?
                        <p>Nenhuma entrada registrada</p> :

                        entradas.map((entrada, index) => (
                            <CardEntrada
                                id={entrada.id}
                                index={index + 1}
                                title={entrada.title}
                                text={entrada.text}
                                value={entrada.value}
                                dataEntrada={entrada.date}
                                onDelete={del}
                                type={entrada}
                            />

                        ))
                }

            </div>

            <div className="totalEntradasContainer">
                <h4>Total de entradas:</h4>
                <p>{totalEntradas} </p>
            </div>

        </div>
    )

}


export default Entradas