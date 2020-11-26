import Axios from 'axios';
import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert2';
import logo from '../assets/logo.jpeg';


function NewUser(){
    
    const[user, setUser] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[csenha, csetSenha] = useState("");
    const history = useHistory();
    

    function handleSubmit(e){
      e.preventDefault();

      if(senha != csenha){
        swal.fire({
          icon: 'error',
          title: 'As senhas não são compatíveis',
        })
      }else{
        Axios.post('http://localhost:3333/Users/', {userName: user, pass: senha, email: email}).then(response => {
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
        <div className="login-container">
        <form className="form">
        <img src={logo} width='100%' height='300px' className="logo-login"></img>
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
              <input value={email} 
              onChange={(e)=>{
                  setEmail(e.target.value)  
              }}
              id="email" type="email" className="validate"/>
              <label className="active" htmlfor="email">E-mail</label>
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
              <Link to="/">Acessar Site</Link>
            </p>
        </div>
      </form>
      </div>
    );

}

export default NewUser;