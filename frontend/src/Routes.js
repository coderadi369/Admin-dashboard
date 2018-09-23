import React, { Component } from 'react';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom';
import  Home from './components/Home.js';
import Register from './components/Register.js'
import Profile from './components/Profile.js'


class Routes extends Component{
	
	constructor(props){
		super(props)
	}
    
    render(){
		return (
          <div>
          	 <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/register' component={Register}/>
             <Route exact path='/profile' component={Profile}/>
             </Switch>
		  </div>
       );
	}

}

export default Routes
