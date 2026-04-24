

const Menu = ({ titleMenu, imgCard, infoCardValueMenu, onClick}) => {


    return (
        <div className="menuCard" onClick={onClick}>

            <div className="menuTopCard">
                <p>{titleMenu}</p>
            </div>

            <div className="menuCenterCard">
                <img src={imgCard} alt="" className="imgMenu" />
            </div>

            <div className="menuBottomCard">
                <p>{infoCardValueMenu}</p>
                <p>R$1000</p>
            </div>

        </div>
    )

}

export default Menu