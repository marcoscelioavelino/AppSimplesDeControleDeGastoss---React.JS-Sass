
import { useState } from 'react'


const FormAddEntrada = () => {

    const [titleEntrada, setTitleEntrada] = useState('')
    const [textEntrada, setTextEntrada] = useState('')
    const [valueEntrada, setValueEntrada] = useState('')
    const [counterEntradas, setCounterEntradas] = useState(0)

    return (
        <form className="formAddEntradaContainer">

            <div className="formAddEntradaContainerInfo">

                <input
                    type="text"
                    placeholder='Título da entrada? (Ex: Venda notebook)'
                    value={titleEntrada}
                    onChange={(e) => setTitleEntrada(e.target.value)} />

                <input
                    type="text"
                    placeholder='Descrição da entrada de verba'
                    value={textEntrada}
                    onChange={(e) => setTextEntrada(e.target.value)}
                />

                <input
                    type="number"
                    placeholder='Informe o valor da entrada'
                    value={valueEntrada}
                    onChange={(e) => setValueEntrada(e.target.value)}
                />
            </div>

            <div className="formAddEntradaContainerButton">

                <button onClick={() => {

                    
                    if ( (titleEntrada === '' || textEntrada === '' || valueEntrada === '') ) {

                        alert('Prencha todos os campos!')
                    } else {
                        return (
                            <div>
                                <h1>Teste</h1>
                            </div>
                        )
                    }

                 




                }}>Salvar</button>


            </div>


        </form>
    )


}

export default FormAddEntrada