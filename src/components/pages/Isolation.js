import React from 'react';
import Navbar from './../layouts/Navbar'
import { useParams } from 'react-router-dom';




class Isolation extends React.Component {
     
    constructor(props) {
        super(props)
        var get = props.location.search
        this.state = {
          data: [],
          name: "Isolation",
          message: "",
          erreur: "",
                
        }
    }

    render() {
   
        return <>
            <Navbar CurrentPage={this.state.name} />
            <main id="main">

    
                    <div class="breadcrumbs d-flex align-items-center Mybg">
                        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

                            <h2 class="text-capitalize">  {this.state.name}</h2>
                            
                                    <ol>
                                        <li><a href="/">Accueil</a></li>
                                    <li class="text-capitalize">{this.state.name}</li>
                                    </ol>
                        </div>
                    </div> 

     
      <div class="container isolation" data-aos="fade-up" data-aos-delay="100"> 
        <div class="wrapper"> 
            
                <div class="container main">
                    <div class="row myrow">

                        <div class="col-md-6 isolation-image">
                            <img src="" alt="" srcset=""/>                          
                        </div>

                        <div class="col-md-6 myright">
                        </div>                       
                    </div>                    
                </div>   
        </div>
        </div>

       

             
          
        </main>
            </>;
    }
}



export default Isolation;