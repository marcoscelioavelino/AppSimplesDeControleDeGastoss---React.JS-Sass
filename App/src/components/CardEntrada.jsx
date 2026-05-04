import editIcon from '../assets/imgs/editIcon.png'
import trashIcon from '../assets/imgs/trashIcon.png'
import minIcon from '../assets/imgs/minIcon.png'
import maxIcon from '../assets/imgs/maxIcon.png'
import { useState } from 'react'


const CardEntrada = ({ id, title, text, value, dataEntrada, onDelete, onEditClick, type }) => {

    const data = new Date(dataEntrada)
    const dia = data.toLocaleDateString('pt-BR', { day: '2-digit' })
    const mes = data.toLocaleDateString('pt-BR', { month: 'long' })
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'short' })

    const [minOuMax, setMinOuMax] = useState(false)

    const toggleMinOuMax = () => {
        setMinOuMax(prev => !prev)
    }

    return (

        <div className='containerCardEntrada'>

            <div className={`containerCardEntradaInfo ${minOuMax ? 'minOuMaxHight' : ''}`}>

                <div className="containerCardEntradaInfoHeader">

                    <div className="containerEntradaIcons">

                        <button onClick={toggleMinOuMax}><img src={minOuMax ? maxIcon : minIcon} alt="" /></button>
                        <button onClick={onEditClick}><img src={editIcon} alt="" /></button>
                        <button onClick={() => onDelete(id)}><img src={trashIcon} alt="" /></button>

                    </div>

                    <p className={type === 'saida' ? 'pSaidas' : ''}> R$ {value}</p>


                </div>

                <div className="containerCardEntradaInfoMain">
                    <h5>{title}</h5>
                    <p className={minOuMax ? 'minOuMax' : ''}> - {text}</p>
                </div>

            </div>

            <div className={`containerCardEntradaDate ${minOuMax ? 'minOuMaxHight' : ''}`}>
                <p>{dia}</p>
                <p>{mes}</p>
                <p className={minOuMax ? 'minOuMax' : ''}>{diaSemana}</p>
            </div>

        </div>
    )
}

export default CardEntrada 