import axios from 'axios';
import React,{useState} from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2';


function ModalEdit({isOpen, dataP}){

    const[pizza, setPizza] = useState(dataP.pizza);
    const[desc, setDesc] = useState(dataP.descrição);
    const[valor, setValor] = useState(dataP.preço);
    const[imgPrev, setImgPrev] = useState(dataP.imagem);
    const data = {
        "pizza": pizza,
        "descrição": desc,
        "preço": valor,
        "imagem": imgPrev
    }
    console.log(dataP.pizza);

    function handleImg(e){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = () => {
            setImgPrev(reader.result)
          };
        reader.readAsDataURL(file);
    }

    async function handleEditModal(dataP){
       try{
            await axios.put(`http://localhost:3333/Pizzas/${dataP.id}`, data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados Atualizados',
                showConfirmButton: false,
                timer: 1000
            })
            window.location.reload(true)
       }catch{
        alert('Erro ao Atualizar dados da Pizza')
       }
    }

    return(
        <Modal isOpen={isOpen}>
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
                <input value={data.descrição} 
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
                onClick={() => {handleEditModal(dataP)}}>Salvar alterações
                <i class="material-icons right"></i>
                </button>
                <button class="btn grey waves-effect waves-light" onClick={() => {window.location.reload(true)}}>Cancelar</button>
                </div>
                <br></br>

            </div>
        </form>
        </div>
        </Modal>
    )
}


export default ModalEdit;