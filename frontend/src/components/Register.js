import React,{Component} from 'react';
import { Container, Row,Input } from 'reactstrap';
import './login.css'
import {config} from '../config.js'
import httpUtils from '../utils/http.js'
import { withCookies, Cookies } from 'react-cookie';



class Register extends Component{
	constructor(props){
		super(props)
		this.state={'username':'',password:'',error_msg:'','role':'user'}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

    handleChange(e) { 
        this.setState({ [e.target.id]: e.target.value });
    }
     
    componentDidMount() {
		const {cookies,history}=this.props;
        if((cookies.get('role').toLowerCase())!='admin'){
            history.push('/')
        }
    }
 
    handleSubmit(e) { 
        const { history} = this.props;
        e.preventDefault();
        let data = {
            username: this.state.username,
            password: this.state.password,
            role:this.state.role
        }
        httpUtils.post(config.api+'/register',data).then(function(data){
            console.log(">> registered sucessfuuly")
        }).catch(function(error){
            console.log(">> some error occured")
        })

        
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
                                                <h3 className="text-center txt-dark mb-10">Register</h3>
                                                <h6 className="text-center nonecase-font txt-grey">Enter your details below</h6>
                                            </div>
                                            <div className="form-wrap" onSubmit={this.handleSubmit}>
                                                <form action="#">
                                                    <div className="form-group">
                                                        <label className="control-label mb-10" htmlFor="email">Username</label>
                                                        <input type="text" className="form-control" required="" id="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="form-group">
                                                        <label className="pull-left control-label mb-10" htmlFor="password">Password</label>
                                                        <input type="password" className="form-control" required="" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="form-group">
                                                        <label className="pull-left control-label mb-10" htmlFor="role"> Select Role </label>
                                                        <Input type="select" name="select" id="role" onChange={this.handleChange}>
                                                            <option>User</option>
                                                            <option>Developer</option>
                                                            <option>Tester</option>
                                                            <option>Admin</option>
                                                        </Input>
                                                    </div>
                                                    <div className='clearfix' />
                                                    <div>{this.state.error_msg ? this.state.error_msg : ""}</div>
                                                    <div className="clearfix" />
                                                    <div className="form-group text-center">
                                                        <button type="submit" className="button -dark">Register</button>
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

export default withCookies(Register)