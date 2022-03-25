import './Cadastro.module.scss'
import api from '../../api'
import React from 'react'
import { useRef } from 'react'


const Cadastro = () => {

    const username = useRef()
    const login = useRef()
    const chave = useRef()

    function enviarDados(event){
        event.preventDefault()
        api.post("/usuarios/", {
            nome: username.current.value,
            email: login.current.value,
            senha: chave.current.value
        }).then((res) => window.location.reload()).catch((err) => console.log(err))
    }

    return (
        <div>
            <div>
                <form onSubmit={enviarDados}>
                    <div>
                        <div>
                            <input required type='text' className="validate" ref={username} />
                                <label>Nome</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={login} />
                                <label>Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input required type="text" className="validate" ref={chave} />
                                <label>Senha</label>
                        </div>
                        <div className="col s12">
                            <button className="waves-effect waves-light btn" type="submit">Enviar</button>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Cadastro