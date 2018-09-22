import React,{Component} from 'react';
import { Container, Row } from 'reactstrap';


class User extends Component{
	constructor(props){
		super(props)
		this.handleSubmit=this.handleSubmit.bind(this);
	}
 
    componentDidMount() {
		const {history}=this.props
        if(!(localStorage.getItem('loggedin')))
        	history.push('/')
    }
    
    handleSubmit(e){
    	e.preventDefault();
    	const {history}=this.props;
    	localStorage.removeItem('loggedin')
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
                                                <h3 className="text-center txt-dark mb-10">You are Logged in as {localStorage.getItem('loggedin')}</h3>
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

export default User