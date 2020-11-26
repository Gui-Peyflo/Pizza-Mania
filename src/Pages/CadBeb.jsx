import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert2'
import axios from 'axios';
import Navbar from '../components/Navbar';
import preImg from '../assets/pergunta-beb.png'

function CadBeb(){

    const[bebida, setBebida] = useState("");
    const[valor, setValor] = useState("");
    const[imgPrev, setImgPrev] = useState(preImg);
    const history = useHistory();
    const data = {
        "bebida": bebida,
        "preço": valor,
        "imagem": imgPrev
    }


    function handleSubmit(e){
        e.preventDefault();
  
        if(bebida === "" || valor === ""){
          swal.fire({
            icon: 'warning',
            title: 'Preencha todos os campos para cadastrar a Bebida',
          })
        }else{
          axios.post('http://localhost:3333/Bebidas/', data).then(response => {
            swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bebida cadastrada',
              showConfirmButton: false,
              timer: 1500
  
            }).then(() => {
              history.push('/lista-Bebidas')
            })
          })
        }
      }

    function handleImg(e){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = () => {
            setImgPrev(reader.result)
          };
        reader.readAsDataURL(file);
    }


    return(
        <>
         <>
            <Navbar/>
            <div className="container">
            <form className="form" encType="multipart/form-data">
            <div className="box-cadBebida">
            <div className="row"> 
                <div className="input-field">
                <input value={bebida} 
                onChange={(e)=>{
                    setBebida(e.target.value)  
                }}
                id="bebida" type="text" className="validate"/>
                <label className="active" htmlfor="bebida">Bebida</label>
                </div>

                <div className="input-field">
                <input value={valor} 
                onChange={(e)=>{
                    setValor(e.target.value)  
                }}
                id="valor" type='number' className="validate"/>
                <label className="active" htmlfor="valor">Preço</label>
                </div>
                </div>

                <div>
                    <input type="file" id='fileItem' required onChange={handleImg}/>
                    <img src={imgPrev} width="200px"  height="200px"/>
                </div>
               <br/>
               <br/>
                <div className="botao">
                <button class="btn waves-effect waves-light" type="submit" name="action"
                onClick={handleSubmit}>Cadastrar
                <i class="material-icons right"></i>
                </button></div>
            </div>
        </form>
        </div>
      </>
        </>
    )
}

export default CadBeb;