import Eye from '../assets/imgs/visibility.png'

const Menu = ({ titleMenu, imgCard, infoCardValueMenu, onClick }) => {

    return (
        <div className="menuCard" onClick={onClick}>

            <div className="menuImgCard">
                <img src={imgCard} alt="" className="imgMenu" />
            </div>

            <div className="menuInfoCard">
                <p><b>{titleMenu}</b></p>
                <p> <img src={Eye} alt="" /> R$ {infoCardValueMenu}</p>
            </div>

        </div>
    )
}

export default Menu