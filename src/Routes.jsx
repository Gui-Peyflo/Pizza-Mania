import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadBeb from './Pages/CadBeb';
import CadPizza from './Pages/CadPizza';
import Home from './Pages/Home';
import ListBebidas from './Pages/ListBebidas';
import ListPizzas from './Pages/ListPizzas';
import Loading from './Pages/Loading';
import Login from './Pages/Login';
import Produtos from './Pages/Produtos';


function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/lista-Pizzas' component={ListPizzas}></Route>
                <Route path='/lista-Bebidas' component={ListBebidas}></Route>
                <Route path='/cadastro-pizzas' component={CadPizza}></Route>
                <Route path='/cadastro-bebidas' component={CadBeb}></Route>
                <Route path='/produtos' component={Produtos}></Route>
                <Route path='/loading' component={Loading}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;