import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert2'
import axios from 'axios';
import Navbar from '../components/Navbar';

function CadPizza(){
    const[pizza, setPizza] = useState("");
    const[desc, setDesc] = useState("");
    const[valor, setValor] = useState("");
    const history = useHistory();
    

    function handleSubmit(e){
      e.preventDefault();

      if(pizza === "" || desc === "" || valor === ""){
        swal.fire({
          icon: 'error',
          title: 'Preencha todos os campos para cadastrar a pizza',
        })
      }else{
        Axios.post('http://localhost:3333/Pizzas/', {user: user, pass: senha}).then(response => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário cadastrado',
            showConfirmButton: false,
            timer: 1500

          }).then(() => {
            history.push('/')
          })
        })
      }

    
    }


    return(
        <>
            <Navbar/>
            <div className="login-container">
            <form className="form">
            <div className="box-login">
            <div className="row"> 
                <div className="input-field">
                <input value={user} 
                onChange={(e)=>{
                    setUser(e.target.value)  
                }}
                id="user" type="text" className="validate"/>
                <label className="active" htmlfor="user">Nome de Usuário</label>
                </div>
                <div className="input-field">
                <input value={senha} 
                onChange={(e)=>{
                    setSenha(e.target.value)  
                }}
                id="password" type="password" className="validate"/>
                <label className="active" htmlfor="password">Senha</label>
                </div>
                <div className="input-field">
                <input value={csenha} 
                onChange={(e)=>{
                    csetSenha(e.target.value)  
                }}
                id="password" type="password" className="validate"/>
                <label className="active" htmlfor="password">Confirme a Senha</label>
                </div>
                </div>
                <div className="botao">
                <button class="btn waves-effect waves-light" type="submit" name="action"
                onClick={handleSubmit}>Cadastrar
                <i class="material-icons right"></i>
                </button></div>
                <br></br>
                <br></br>
                <p>
                <Link to="/">Já está cadastrado? Entre Aqui</Link>
                </p>
            </div>
        </form>
        </div>
      </>
    );
}

export default CadPizza;