import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import preImg from '../assets/img-pergunta.jpg';
import swal from 'sweetalert2';
import ModalEditBeb from '../components/ModalEditBebida';
import ModalDelBeb from '../components/ModalDeleteBebida';
import ModalDeleteBeb from '../components/ModalDeleteBebida';


function ListBebidas(){
    const[bebidas,setBebidas] = useState([]);
    const[modalEdit, setModalEdit] = useState(false)
    const[modalDel, setModalDel] = useState(false)
    const[bebidaUpdate, setBebidaUpdate] = useState([])
    const[bebidaDel, setBebidaDel] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/Bebidas').then(response => {
            setBebidas(response.data);
        })
    }, [])


    function handleEdit(data){
        setModalEdit(true)
        setBebidaUpdate(data)
    }

    function handleDel(data){
        setModalDel(true)
        setBebidaDel(data)
    }



    return(
        <>
            <Navbar/>
            {modalEdit && <ModalEditBeb isOpen={modalEdit} dataB={bebidaUpdate} />}
            {modalDel && <ModalDeleteBeb isOpen={modalDel} dataB={bebidaDel} />}
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome da Bebida</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        
                            bebidas.map((data) => {
                            return (
                            <tr key={data.id}>
                                <th><img src={data.imagem} className='img-list'></img></th>
                                <th>{data.bebida}</th>
                                <th>{data.preço}</th>

                                <th>
                                    <button className="btn " type="submit" name="action" onClick={() => {handleEdit(data)}}>Editar<i className="material-icons right"></i></button>

                                    <button className="btn" type="submit" name="action" onClick={() => {handleDel(data)}}>Excluir
                                    <i className="material-icons right"></i>
                                    </button>
                                </th>
                            </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListBebidas;