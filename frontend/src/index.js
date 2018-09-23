import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history'
import {BrowserRouter as Router} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
const history = createBrowserHistory();

ReactDOM.render(
   <CookiesProvider>
	<Router history={history}> 
	 <App/>
	</Router>
   </CookiesProvider>, document.getElementById('root'));
registerServiceWorker();