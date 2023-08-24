import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';


class Apropos extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"apropos",
        }

        
    }

    componentDidMount(){
            
    }
    render() {
        return (
            <>
                <Navbar/>
                
            </>
        );
    }
}



export default Apropos;