import axios from 'axios';
import React,{useState} from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2';


function ModalEditBeb({isOpen, dataB}){

    const[bebida, setBebida] = useState(dataB.bebida);
    const[valor, setValor] = useState(dataB.preço);
    const[imgPrev, setImgPrev] = useState(dataB.imagem);
    const data = {
        "bebida": bebida,
        "preço": valor,
        "imagem": imgPrev
    }
    console.log(dataB.pizza);

    function handleImg(e){
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = () => {
            setImgPrev(reader.result)
          };
        reader.readAsDataURL(file);
    }

    async function handleEditModal(dataB){
       try{
            await axios.put(`http://localhost:3333/Bebidas/${dataB.id}`, data).
            then((response) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Dados Atualizados',
                    showConfirmButton: false,
                    timer: 1000
                })
            }).then((response) => {
                window.location.reload(true)
            })
           
           
       }catch{
        alert('Erro ao Atualizar dados da Bebida')
       }
    }

    return(
        <Modal isOpen={isOpen}>
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
                <label className="active" htmlfor="bebida">Nome da Bebida</label>
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
                onClick={() => {handleEditModal(dataB)}}>Salvar alterações
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


export default ModalEditBeb;