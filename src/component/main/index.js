import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../../container/home';
import Contact from '../../container/contact';
import Search from '../../container/search';
import AddNew from '../../container/addNew'; 
import TestImage from '../../container/testImageupload';
import View from '../../container/viewItem';
const Main = props =>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/search" component={Search}/>
        <Route path="/add" component={AddNew}/>
        <Route path="/test" component={TestImage}/>
        <Route path="/view/:id" component={View}/>
    </Switch>
)

export default Main;