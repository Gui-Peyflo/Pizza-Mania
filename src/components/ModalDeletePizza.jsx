import Axios from 'axios';
import React from 'react';
import Modal from 'react-modal'


function ModalDelete({isOpen, userData}){

    async function handleDeleteModal(userData){
       try{
            await Axios.delete('http://localhost:3333/Pizzas/'+ userData.id)
            window.location.reload(true)
       }catch{
        alert('Erro ao deletar Pizza')
       }
    }

    return(
        <Modal isOpen={isOpen}>
            <h3>Tem certeza que deseja excluir a Pizza</h3>

            <button onClick={() => {window.location.reload(true)}}>Cancelar</button>
            <button onClick={() => {handleDeleteModal(userData)}}>
                Deletar
            </button>
        </Modal>
    )
}


export default ModalDelete;