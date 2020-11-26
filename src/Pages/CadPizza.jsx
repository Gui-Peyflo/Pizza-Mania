import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import swal from 'sweetalert2'
import axios from 'axios';
import Navbar from '../components/Navbar';
import preImg from '../assets/img-pergunta.jpg'



function CadPizza(){

    const[pizza, setPizza] = useState("");
    const[desc, setDesc] = useState("");
    const[valor, setValor] = useState("");
    const[imgPrev, setImgPrev] = useState(preImg);
    const history = useHistory();
    const data = {
        "pizza": pizza,
        "descrição": desc,
        "preço": valor,
        "imagem": imgPrev
    }

    function handleSubmit(e){
      e.preventDefault();

      if(pizza === "" || desc === "" || valor === ""){
        swal.fire({
          icon: 'warning',
          title: 'Preencha todos os campos para cadastrar a pizza',
        })
      }else{
        axios.post('http://localhost:3333/Pizzas/', data).then(response => {
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pizza cadastrada',
            showConfirmButton: false,
            timer: 1500

          }).then(() => {
            history.push('/lista-Pizzas')
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
            <Navbar/>
            <div className="container">
            <form className="form" encType="multipart/form-data">
            <div className="box-cadPizza">
            <div className="row"> 
                <div className="input-field">
                <input value={pizza} 
                onChange={(e)=>{
                    setPizza(e.target.value)  
                }}
                id="pizza" type="text" className="validate"/>
                <label className="active" htmlfor="pizza">Nome da Pizza</label>
                </div>

                <div className="input-field">
                <input value={desc} 
                onChange={(e)=>{
                    setDesc(e.target.value)  
                }}
                id="desc" type="text" className="validate"/>
                <label className="active" htmlfor="desc">Ingredientes</label>
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
                    <input type="file" id='fileItem' onChange={handleImg}/>
                    <img src={imgPrev} width="200px"  height="200px"/>
                </div>
               <br/>
               <br/>
                <div className="botao">
                <button class="btn waves-effect waves-light" type="submit" name="action"
                onClick={handleSubmit}>Cadastrar
                <i class="material-icons right"></i>
                </button></div>
                <br></br>

            </div>
        </form>
        </div>
      </>
    );
}

export default CadPizza;