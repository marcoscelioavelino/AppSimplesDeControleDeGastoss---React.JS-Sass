
import { useState } from 'react'


const FormAdd = ({ fechar, onAdd }) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [value, setValue] = useState('')
    const [date, setDate] = useState(Date.now())
    const [counterEntradas, setCounterEntradas] = useState(0)



    const handleSubmit = (e) => {
        e.preventDefault()

        const novaEntrada = {
            id: crypto.randomUUID(),
            title,
            text,
            value,
            date: Date.now()
            
        }
        onAdd(novaEntrada)
        console.log(novaEntrada)
        fechar()

    }

        

    return (

        // ENTRADA

        <form onSubmit={handleSubmit} className="formAddContainer">

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

                <button onClick={handleSubmit}>Salvar</button>


            </div>


        </form>

    )


}

export default FormAdd