import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadBeb from './Pages/CadBeb';
import CadPizza from './Pages/CadPizza';
import Home from './Pages/Home';
import ListBebidas from './Pages/ListBebidas';
import ListPizzas from './Pages/ListPizzas';
import Loading from './Pages/Loading';
import Login from './Pages/Login';
import NewUser from './Pages/NewUser';
import Produtos from './Pages/Produtos';
import ForgetPsw from './Pages/ForgetPsw';


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
                <Route path='/Novo-usuário' component={NewUser}></Route>
                <Route path='/recuperação-de-senha' component={ForgetPsw}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;