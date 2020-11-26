import React from 'react';
import Navbar from '../components/Navbar';
import banner from '../assets/banner.jpeg'

function Home(){
    return(
        <>
        <Navbar />
        
        <div className='container  banner'>
            <div>
            <img src={banner} className='img-banner'></img>
            </div>
            <br/><br/>
            <div className='texto'>
                Pizza Mania<br/>
                Conheça a melhor pizza da região<br/>
                Temos pizzas de diversos sabores.<br/>
                Consulte o nosso cardápio. 
            </div>
        </div>
        </>
    )
}

export default Home;