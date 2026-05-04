import { useState } from "react"
import CardEntrada from "../components/CardEntrada"
import FormAdd from "../components/FormAdd"

const Saidas = ({ saidas, setSaidas }) => {

    const [busca, setBusca] = useState('')
    const [addForm, setAddForm] = useState(false)
    const [saidaEditada, setSaidaEditada] = useState(null)

    const handleEdit = (saida) => {
        setSaidaEditada(saida)
        setAddForm(true)
    }

    const totalSaidas = saidas.reduce((somaSaidas, valor) => {
        return somaSaidas + Number(valor.value)
    }, 0)

    const addSaida = (novaSaida) => {
        setSaidas(prev => [...prev, novaSaida])
    }

    const editSaida = (saidaAtualizada) => {
        setSaidas(prev => prev.map(saida => saida.id === saidaAtualizada.id ? saidaAtualizada : saida))
    }

    const del = (id) => {
        setSaidas(prev => prev.filter(response => response.id !== id))
    }

    const saidasFiltradas = saidas.filter(saida => 
        saida.title.toLowerCase().includes(busca.toLowerCase())
    )

    return (

        <div className="entradasContainer">

            <div className="headerEntradasContainer">

                <div className="topHeaderEntradasContainer">

                    <div className="textTopHeaderEntradas">
                        <h1>Gerenciamento de saídas</h1>
                        <input 
                            type="text" 
                            placeholder="Procurar saída" 
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>

                </div>

                <div className="bottomHeaderEntradasContainer">

                    <button className="btAddSaida" onClick={() => setAddForm(true)}>
                        <div>+</div>
                        Adicionar saída
                    </button>

                </div>

            </div>

            <div className="cardsEntradasContainer">

                {addForm &&
                    <FormAdd
                        fechar={() => {
                            setAddForm(false)
                            setSaidaEditada(null)
                        }}
                        onAdd={addSaida}
                        onEdit={editSaida}
                        entrada={saidaEditada}
                    />}

                {saidasFiltradas.length === 0 ? (
                    <p style={{ textAlign: 'center', color:'#fff' }}>
                        Nenhuma saída encontrada
                    </p>
                ) : (
                    saidasFiltradas.map((saida, index) => (
                        <CardEntrada
                            key={saida.id}
                            id={saida.id}
                            index={index + 1}
                            title={saida.title}
                            text={saida.text}
                            value={saida.value}
                            dataEntrada={saida.date}
                            onDelete={del}
                            onEditClick={() => handleEdit(saida)}
                            type='saida'
                        />
                    ))
                )}

            </div>

            <div className="totalEntradasContainer">
                <p>Total: <b>R$ {totalSaidas}</b></p>
            </div>

        </div>
    )

}

export default Saidas