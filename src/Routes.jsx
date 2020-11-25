import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/listusers' component={ListUsers}></Route>
                <Route path='/cadastro-pizza' component={cadPizza}></Route>
                <Route path='/cadastro-bebidas' component={cadBeb}></Route>
                <Route path='/produtos' component={Produtos}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;