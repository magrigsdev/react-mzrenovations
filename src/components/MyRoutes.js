import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';

class MyRoutes extends Component {
    render() {
        return (
            
                <Router>
                    
                    <Route  exact path="/" component={Home} />
                    
                </Router>  
        
        );
    }
}



export default MyRoutes;