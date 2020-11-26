import Axios from 'axios';
import React from 'react';
import Modal from 'react-modal'


function ModalDeleteBeb({isOpen, dataB}){

    async function handleDeleteModal(dataB){
       try{
            await Axios.delete('http://localhost:3333/Bebidas/'+ dataB.id)
            window.location.reload(true)
       }catch{
        alert('Erro ao deletar Bebida')
       }
    }

    return(
        <Modal isOpen={isOpen}>
            <h3>Tem certeza que deseja excluir a Bebida</h3>

            <button onClick={() => {window.location.reload(true)}}>Cancelar</button>
            <button onClick={() => {handleDeleteModal(dataB)}}>
                Deletar
            </button>
        </Modal>
    )
}


export default ModalDeleteBeb;