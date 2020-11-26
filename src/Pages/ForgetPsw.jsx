import axios from 'axios';
import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../assets/logo.jpeg'


function ForgetPsw(){
    
    const[senha, setSenha] = useState('');
    const[emailR,setEmailR] = useState('');
    const[cSenha,setCsenha] = useState('');
    const hst = useHistory();

    function verificar(e){
        e.preventDefault();
        if(emailR != "" && senha != "" && cSenha != ""){

            axios.get(`http://localhost:3333/Users/?email=${emailR}`).then((response) => {
                const user = response.data;
                console.log(user[0].id)
                

                if(user != []){
                    if(senha != cSenha){
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: 'Senhas Incompátiveis',
                            showConfirmButton: false,
                            timer: 1200
                          })

                    }else{
                        const data ={
                            "userName":user[0].userName,
                            "pass":senha ,
                            "email": user[0].email
                        }
                    axios.put(`http://localhost:3333/Users/` + user[0].id, data).then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Senha Atualizada com sucesso',
                            showConfirmButton: false,
                            timer: 1200
                          })
                    }).then(() => {
                        hst.push('/');
                    })
                }
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'O email informado não está cadastrado',
                        showConfirmButton: false,
                        timer: 1200
                      })

                }
            })
            
        }else{
            alert("Campos incompletos");
        }
    }


    return(
        <>
            <div className="login-container">
                <form className="form">
                <img src={logo} width='100%' height='300px' className="logo-login"></img>
                <div className="box-rec-senha">
                    <br/>
                <div className="row">
                <div className="input-field">
                    <input value={emailR} onChange={(e)=>{
                        setEmailR(e.target.value)
                    }}
                id="email" type="email" className="validate"/>
                    <label className="active" htmlfor="email">Email</label>
                </div>

                </div>
            
                <div className="input-field">
                <input value={senha} onChange={(e)=>{
                        setSenha(e.target.value)
                    }}
                id="senha" type="password" className="validate"/>
                <label className="active" htmlfor="senha">Nova Senha</label>
                </div>

                <div className="input-field">
                <input value={cSenha} onChange={(e)=>{
                        setCsenha(e.target.value)
                    }}
                id="password" type="password" className="validate"/>
                <label className="active" htmlfor="password">Confirmação da Nova Senha</label>
                </div>
                <div className="botao">
                <button class="btn waves-effect waves-light" type="submit" name="action"
                onClick={verificar}>Atualizar Senha
                <i class="material-icons right"></i>
                </button>
                </div>
                <br></br>
                <p>
                <Link to="/">Acessar Site</Link>
                </p>
            </div>
            </form>
            </div>
        </>
    );

}

export default ForgetPsw;