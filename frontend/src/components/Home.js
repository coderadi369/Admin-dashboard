import React,{Component} from 'react';
import { Container, Row } from 'reactstrap';
import './login.css'


class Home extends Component{
	constructor(props){
		super(props)
		this.state={'username':'',password:'',error_msg:''}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

    handleChange(e) { 
        this.setState({ [e.target.id]: e.target.value });
    }
     
    componentDidMount() {
		const {history}=this.props
        if(localStorage.getItem('loggedin'))
        	history.push('/user')
    }
 
    handleSubmit(e) { 
        const { history} = this.props;
        e.preventDefault();
        let data = {
            username: this.state.username,
            password: this.state.password
        }
        if(data.username.toLowerCase()=='harish' && data.password.toLowerCase()=='harish'){
        	localStorage.setItem('loggedin',data.username)
        	history.push('/user')
        }else{
        	this.setState({'error_msg':'Please enter valid username and password'})
        }
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
                                                <h3 className="text-center txt-dark mb-10">Sign in</h3>
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
                                                    <div>{this.state.error_msg ? this.state.error_msg : ""}</div>
                                                    <div className="clearfix" />
                                                    <div className="form-group text-center">
                                                        <button type="submit" className="button -dark">sign in</button>
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

export default Home