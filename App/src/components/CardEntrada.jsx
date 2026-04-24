import editIcon from '../assets/imgs/editIcon.png'
import trashIcon from '../assets/imgs/trashIcon.png'
import minIcon from '../assets/imgs/minIcon.png'
import maxIcon from '../assets/imgs/maxIcon.png'



const CardEntrada = ({ titleEntrada, textEntrada, valueEntrada, dateEntrada }) => {


    return (

        <div className='containerCardEntrada'>

            <div className="containerCardEntradaInfo">

                <div className="containerCardEntradaInfoHeader">

                    <div className="containerEntradaIcons">

                        <button><img src={minIcon} alt="" /></button>
                        <button><img src={editIcon} alt="" /></button>
                        <button><img src={trashIcon} alt="" /></button>

                    </div>

                    <p>R$ 1.000.000,00</p>

                </div>

                <div className="containerCardEntradaInfoMain">
                    <h5>Edição de Vídeo</h5>
                    <p> - Pagamento de edição de vídeo propaganda eleitoral para a prefeitura do estado.</p>
                </div>

            </div>

            <div className="containerCardEntradaDate">
                <p>12</p>
                <p>abril</p>
                <p>seg.</p>
            </div>

        </div>
       )
}

export default CardEntrada 