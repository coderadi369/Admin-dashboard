import React, { Component } from 'react';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom';
import  Home from './components/Home.js';
import  User from './components/User.js';


class Routes extends Component{
	
	constructor(props){
		super(props)
	}
    
    render(){
		return (
          <div>
          	 <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/user' component={User} />
             </Switch>
		  </div>
       );
	}

}

export default Routes
