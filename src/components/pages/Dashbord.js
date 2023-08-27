import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';

class Dashbord extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          name: "Dashbord",
          message: "",
          erreur: ""
        }
    }

    render() {
        return <>
            <Navbar CurrentPage={this.state.name} />
            </>;
    }
}

export default Dashbord;