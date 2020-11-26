import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import preImg from '../assets/img-pergunta.jpg';
import swal from 'sweetalert2';
import ModalEdit from '../components/ModalEditPizza'
import ModalDelete from '../components/ModalDeletePizza';

function ListPizzas(){
    const[pizzas,setPizzas] = useState([]);
    const[modalEdit, setModalEdit] = useState(false)
    const[modalDel, setModalDel] = useState(false)
    const[pizzaUpdate, setPizaaUpdate] = useState([])
    const[pizzaDel, setPizaaDel] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3333/Pizzas').then(response => {
            setPizzas(response.data);
        })
    }, [])


    function handleEdit(data){
    setModalEdit(true)
    setPizaaUpdate(data)
    }

    function handleDel(data){
        setModalDel(true)
        setPizaaDel(data)
        }



    return(
        <>
            <Navbar/>
            {modalEdit && <ModalEdit isOpen={modalEdit} dataP={pizzaUpdate}/>}
            {modalDel && <ModalDelete isOpen={modalDel} userData={pizzaDel}/>}
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome da Pizza</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        
                            pizzas.map((data) => {
                            return (
                            <tr key={data.id}>
                                <th><img src={data.imagem} className='img-list'></img></th>
                                <th>{data.pizza}</th>
                                <th className='descricao'>{data.descrição}</th>
                                <th>{data.preço}</th>

                                <th className='edit-del'>
                                    <button className="btn edit" type="submit" name="action" onClick={() => {handleEdit(data)}}>Editar<i className="material-icons right"></i></button>

                                    <button className="btn del" type="submit" name="action" onClick={() => {handleDel(data)}}>Excluir
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

export default ListPizzas;