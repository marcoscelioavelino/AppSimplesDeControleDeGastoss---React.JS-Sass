import { useState } from 'react'
import close from '../assets/imgs/close.png'

const FormAdd = ({ fechar, onAdd, onEdit, entrada }) => {

    const [title, setTitle] = useState(entrada?.title || '')
    const [text, setText] = useState(entrada?.text || '')
    const [value, setValue] = useState(entrada?.value || '')
    const [date, setDate] = useState(Date.now())

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim() || !text.trim()) {
            alert('O título e a descrição são obrigatórios.')
            return
        }

        if (!value || isNaN(Number(value))) {
            alert('O valor deve ser um número válido.')
            return
        }

        const novaEntrada = {
            id: entrada?.id || crypto.randomUUID(),
            title,
            text,
            value: Number(value),
            date: entrada?.date || Date.now()
        }

        if (entrada) {
            onEdit(novaEntrada)
        } else {
            onAdd(novaEntrada)
        }

        fechar()
    }

    return (

        <form onSubmit={handleSubmit} className="formAddContainer">

            <div className="formAddContainerTop">
                <button type='button' onClick={() => fechar()}>
                    <img src={close} alt="" />
                </button>
            </div>

            <p>Adicionar Entrada</p>

            <div className="formAddContainerInfo">

                <input
                    type="text"
                    placeholder='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input
                    type="text"
                    placeholder='Descrição'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <input
                    type="number"
                    placeholder='Valor R$'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

            </div>

            <div className="formAddContainerButton">
                <button type='submit'>Salvar</button>
                <button type='button' onClick={() => fechar()}>Cancelar</button>
            </div>

        </form >

    )
}

export default FormAdd