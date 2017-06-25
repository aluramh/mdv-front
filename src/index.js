import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Import routing components
import {Router, Route} from 'react-router';

import './index.css';
// Import Bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Router>
        {/*Each route is defined with Route*/}
        <Route path="/" component={App}/>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
