import { useState } from "react"

const Home = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cadastrado, setCadastrado] = useState(false)

    return (cadastrado === false) ?
        <form>
            <h3>Cadastrar usuárioooooooooooooo</h3>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            <input
                type="number"
                placeholder="Senha"
                value={pass}
                onChange={(e)=> setPass(e.target.value)}
                />

            {/* handleSubmit */}
            <button>Cadastrar</button>
            <button>Cancelar</button>

        </form> :

        <div>
            <h3>Fazer Login</h3>
            <input
                type="text"
                placeholder="Email" />

            <input type="number"
                placeholder="Senha" />

            <button>Salvar</button>
            <button>Cancelar</button>
        </div>

}

export default Home