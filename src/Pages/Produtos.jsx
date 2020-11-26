import React from 'react';
import Navbar from '../components/Navbar';
import pizza from '../assets/pizza.png'
import bebida from '../assets/bebida.png'
import { Link } from 'react-router-dom';

function Produtos(){
    return(
        <>
            <Navbar/>
            <div>
                <div className='itens'>
                    <div className='box-pizza'>
                        <div>
                            <img src={pizza} className='img-pizza'></img>
                        </div>
                        <div className='footer-pizza'>
                                <a className='menu-pizza'>Pizzas</a>
                                <div className='sub-footer-pizza'>
                                <Link to='/cadastro-pizzas'><i className="material-icons edit-but">add_box</i></Link>
                                    <Link to='/lista-Pizzas'><i className="material-icons edit-but">mode_edit</i></Link>
                                </div>
                        </div>
                    </div>
                    <br/>
                    <div className='box-beb'>
                        <div>
                            <img src={bebida} className='img-beb'></img>
                        </div>
                        <div className='footer-beb'>
                                <a className='menu-beb'>Bebidas</a>
                                <div className='sub-footer-beb'>
                                    <Link to='/cadastro-bebidas'><i className="material-icons edit-but">add_box</i></Link>
                                    <Link to='/lista-Bebidas'><i className="material-icons edit-but">mode_edit</i></Link>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Produtos;