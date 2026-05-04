import { useState } from "react"
import CardEntrada from "../components/CardEntrada"
import FormAdd from "../components/FormAdd"

const Entradas = ({ entradas, setEntradas }) => {

    const [busca, setBusca] = useState('') 
    const [addForm, setAddForm] = useState(false)
    const [entradaEditada, setEntradaEditada] = useState(null)

    const handleEdit = (entrada) => {
        setEntradaEditada(entrada)
        setAddForm(true)
    }

    const totalEntradas = entradas.reduce((somaValores, valorEntrada) => {
        return somaValores + Number(valorEntrada.value)
    }, 0)

    const addEntrada = (novaEntrada) => {
        setEntradas(prev => [...prev, novaEntrada])
    }

    const editEntrada = (entradaAtualizada) => {
        setEntradas(prev => prev.map(entrada => entrada.id === entradaAtualizada.id ? entradaAtualizada : entrada))
    }

    const del = (id) => {
        setEntradas(prev => prev.filter(response => response.id !== id))
    }

    const entradasFiltradas = entradas.filter(entrada => 
        entrada.title.toLowerCase().includes(busca.toLowerCase())
    )

    return (

        <div className="entradasContainer">

            <div className="headerEntradasContainer">

                <div className="topHeaderEntradasContainer">

                    <div className="textTopHeaderEntradas">
                        <h1>Gerenciamento de entradas</h1>
                        <input 
                            type="text" 
                            placeholder="Procurar entrada" 
                            value={busca}
                            onChange={(e)=> setBusca(e.target.value)}
                        />
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

                {addForm &&
                    <FormAdd
                        fechar={() => {
                            setAddForm(false)
                            setEntradaEditada(null)
                        }}
                        onAdd={addEntrada}
                        onEdit={editEntrada}
                        entrada={entradaEditada}
                    />}

                {entradasFiltradas.length === 0 ? (
                    <p style={{ textAlign: 'center', color:'#fff' }}>
                        Nenhuma entrada encontrada
                    </p>
                ) : (
                    entradasFiltradas.map((entrada, index) => (
                        <CardEntrada
                            key={entrada.id}
                            id={entrada.id}
                            index={index + 1}
                            title={entrada.title}
                            text={entrada.text}
                            value={entrada.value}
                            dataEntrada={entrada.date}
                            onDelete={del}
                            onEditClick={() => handleEdit(entrada)}
                            type={entrada}
                        />
                    ))
                )}

            </div>

            <div className="totalEntradasContainer">
                <p>Total: <b>R$ {totalEntradas}</b></p>
            </div>

        </div>
    )
}

export default Entradas