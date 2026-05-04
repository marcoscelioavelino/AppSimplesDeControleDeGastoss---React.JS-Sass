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
    return () => clearInterval(realTime)
  }, [])


  const [entradas, setEntradas] = useState(() => {
    const entradasSalvas = localStorage.getItem('entradas')
    return entradasSalvas ? JSON.parse(entradasSalvas) : []
  })

  useEffect(() => {
    localStorage.setItem('entradas', JSON.stringify(entradas))
  }, [entradas])

  const totalDeEntradas = entradas.reduce((soma, item) => {
    return soma + Number(item.value)
  }, 0)



  const [saidas, setSaidas] = useState(() => {
    const saidasSalvas = localStorage.getItem('saidas')
    return saidasSalvas ? JSON.parse(saidasSalvas) : []
  })

  useEffect(() => {
    localStorage.setItem('saidas', JSON.stringify(saidas))
  }, [saidas])


  const totalDeSaidas = saidas.reduce((soma, item) => {
    return soma + Number(item.value)
  }, 0)

  // const [saldo, setSaldo] = useState([])
  const saldo = totalDeEntradas - totalDeSaidas


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
            infoCardValueMenu={totalDeEntradas}
            onClick={() => setPage('Entradas')}
          />

          <Menu
            titleMenu='Saídas'
            imgCard={despesaIcon}
            infoCardValueMenu={totalDeSaidas}
            onClick={() => setPage('Saidas')}
          />

          <Menu
            titleMenu='Balanço'
            imgCard={balaçoIcon}
            infoCardValueMenu={saldo}
            onClick={() => setPage('Balanco')}
          />

        </div>

        <div className="infoContainer">

          <div className="infoContainerData">
            {page === 'Home' && <Home />}

            {page === 'Entradas' && (
              <Entradas
                entradas={entradas}
                setEntradas={setEntradas}
              />
            )}

            {page === 'Saidas' && (
              <Saidas
                saidas={saidas}
                setSaidas={setSaidas}
              />
            )}

            {page === 'Balanco' && (
              <Balanco
                entradas={entradas}
                saidas={saidas}
              />
            )}

          </div>

        </div>

      </div>
    </main>
  )
}

export default App