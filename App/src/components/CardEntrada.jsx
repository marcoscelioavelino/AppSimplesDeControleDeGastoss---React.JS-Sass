import editIcon from '../assets/imgs/editIcon.png'
import trashIcon from '../assets/imgs/trashIcon.png'
import minIcon from '../assets/imgs/minIcon.png'
import maxIcon from '../assets/imgs/maxIcon.png'



const CardEntrada = ({ id, title, text, value, dataEntrada, onDelete, type }) => {

    const data = new Date(dataEntrada)
    const dia = data.toLocaleDateString('pt-BR', { day: '2-digit' })
    const mes = data.toLocaleDateString('pt-BR', { month: 'long' })
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'short' })

    return (

        <div className='containerCardEntrada'>

            <div className="containerCardEntradaInfo">

                <div className="containerCardEntradaInfoHeader">

                    <div className="containerEntradaIcons">

                        <button><img src={minIcon} alt="" /></button>
                        <button><img src={editIcon} alt="" /></button>
                        <button onClick={() => onDelete(id)}><img src={trashIcon} alt="" /></button>

                    </div>

                    <p className={ type === 'saida' ? 'pSaidas' : ''}> {value}</p>
                   

                </div>

                <div className="containerCardEntradaInfoMain">
                    <h5>{title}</h5>
                    <p> - {text}</p>
                </div>

            </div>

            <div className="containerCardEntradaDate">
                <p>{dia}</p>
                <p>{mes}</p>
                <p>{diaSemana}</p>
            </div>

        </div>
    )
}

export default CardEntrada 