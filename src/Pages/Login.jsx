import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import "./style.css"
import logo from '../assets/logo.jpeg'
import axios from 'axios';

function Login(){

    const[userLog, setUser] = useState("");
    const[senha, setSenha] = useState("");
    const history = useHistory();
    let login;

    function handleSubmit(e){
      e.preventDefault();


      axios.get('http://localhost:3333/Users').then(response => {
        const results = response.data;

        if(userLog === '' || senha === ""){
          alert("preencha os campos")
        }else{
          login = results.some(({userName,pass}) => {
            return userName === userLog && senha === pass;
          })
        }
      }).catch(error => {
        alert("Problema ao conectar com o servidor")
      }).then(() => {
      
        if(login){
          history.push('/loading')
            setTimeout(() => {
              history.push("/home")
            },2000) 
        }else{
          alert("dados incorretos")
        }
      })
    }
  

    return(
        <div className="login-container">
        <form className="form">
        <img src={logo} width='100%' height='300px' className="logo-login"></img>
          <div className="box-login">  
          <br></br><br></br>
          <div className="row">
          <div className="input-field">
            <input value={userLog} 
            onChange={(e)=>{
                setUser(e.target.value)  
            }} id="user" type="text" className="validate"/>
            <label className="active" htmlfor="user">UserName</label>
          </div>

        </div>
          
            <div className="input-field">
              <input value={senha} 
              onChange={(e)=>{
                  setSenha(e.target.value)  
              }}
              id="password" type="password" className="validate"/>
              <label className="active" htmlfor="password">password</label>
            </div>
            <div className="botao">
            <button class="btn red darken-3 waves-effect waves-light " type="submit" name="action"
            onClick={handleSubmit}>Login
            <i class="material-icons right"></i>
            </button></div>
              <br></br>
              <br></br>
            <p>
              <Link to="/recuperação-de-senha">Esqueceu sua senha?</Link>
              <br>
              </br>
              <Link to="/Novo-usuário">É novo por aqui?</Link>
            </p>
        </div>
      </form>
      </div>
    );

}

export default Login;