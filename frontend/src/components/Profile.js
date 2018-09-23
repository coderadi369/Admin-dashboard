import React,{Component} from 'react';
import { Container, Row } from 'reactstrap';
import { withCookies, Cookies } from 'react-cookie';
import {config} from '../config.js'
import httpUtils from '../utils/http.js'

class Profile extends Component{
	constructor(props){
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this);
	}
 
    componentDidMount() {
		const {history,cookies}=this.props
        if(!(cookies.get('username'))){
            history.push('/')
        }else{
           httpUtils.get(config.api+'/').then(function(data){
              console.log(">>> data",data)
           }).catch(function(error){
              console.log(">> error",error)
           })
        }
    }

    getDomain(){
        return '.manch.test'
    }
    
    handleSubmit(e){
    	e.preventDefault();
    	const {history,cookies}=this.props;
    	const domain = this.getDomain()
        cookies.remove('username', {path: '/', domain: domain});
        cookies.remove('role', {path: '/', domain: domain});
        history.push('/')
    }


	render(){
		return (
            <div className="wrapper pa-0">
                <div className="page-wrapper pa-0 ma-0 auth-page">
                    <Container fluid>
                        <div className="table-struct full-width full-height">
                            <div className="table-cell vertical-align-middle auth-form-wrap">
                                <div className="auth-form  ml-auto mr-auto no-float">
                                    <Row>
                                        <div className="col-sm-12 col-xs-12">
                                            <div className="mb-30">
                                                <h3 className="text-center txt-dark mb-10">Hello !! You are Logged in </h3>
                                            </div>
                                            <div className="form-wrap" onSubmit={this.handleSubmit}>
                                                <form action="#">
                                                   <div className="form-group text-center">
                                                        <button type="submit" className="button -dark">Sign Out</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        );
	}
}

export default withCookies(Profile)