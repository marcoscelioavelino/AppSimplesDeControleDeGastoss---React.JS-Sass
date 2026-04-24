import './styles/components/app.sass'
import Menu from './components/Menu'
import { useEffect, useState } from 'react'
import Logo from "./assets/imgs/logo.png"
import ganhoIcon from './assets/imgs/ganho.png'
import despesaIcon from './assets/imgs/despesa.png'
import balaçoIcon from './assets/imgs/balanco.png'
import Entradas from './pages/Entradas'
import Saidas from './pages/Saidas'
import Balanco from './pages/Balanco'
import Home from './pages/Home'

const App = () => {

  const [page, setPage] = useState('Home')

  const [dateBR, setDateBR] = useState(new Date())
  useEffect(() => {
    const realTime = setInterval(() => {
      setDateBR(new Date())
    }, 1000)
    return () =>
      clearInterval(realTime)
  }, [])



  return (

    <main>

      <div className="appContainer">

        <div className="menuContainer">

          <p>

            {dateBR.toLocaleDateString('pt-BR', {
              weekday: 'short',
              day: '2-digit',
              month: 'numeric',
              year: 'numeric'
            })} <br />
            {dateBR.toLocaleTimeString('pt-BR')}
          </p>

          <Menu
            titleMenu='Entradas'
            imgCard={ganhoIcon}
            infoCardValueMenu='varAcoes'
            onClick={()=> setPage('Entradas')}
          />

          <Menu
            titleMenu='Saídas'
            imgCard={despesaIcon}
            infoCardValueMenu='varAcoes'
            onClick={()=> setPage('Saidas')}
          />

          <Menu
            titleMenu='Balanço'
            imgCard={balaçoIcon}
            infoCardValueMenu='varAcoes'
            onClick={()=> setPage('Balanco')}
          />



        </div>

        <div className="infoContainer">


          <div className="infoContainerData">
            {page === 'Home' && <Home />}
            {(page === 'Entradas' && <Entradas />)}
            {(page === 'Saidas' && <Saidas />)}
            {(page === 'Balanco' && <Balanco />)}

          </div>


        </div>

      </div>
    </main>
  )
}

export default App


