import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          name: "Contact",
          message: "",
          erreur: ""
        }
    }

    render() {
        return <>
            <Navbar CurrentPage={this.state.name} />
            <main id="main">

    
    <div class="breadcrumbs d-flex align-items-center Mybg" >
      <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>{this.state.name}</h2>
        <ol>
          <li><a href="/">Accueil</a></li>
          <li>{this.state.name}</li>
        </ol>

      </div>
    </div>

   
    <div class="wrapper">
      
      <div class="container main">
          <div class="row myrow">
              <div class="col-md-6 side-image">
                 <img src="" alt="" srcset=""/>                          
              </div>
              <div class="col-md-6 myright">
                  <form action="{{url('contact')}}" method="POST">
                      

                      <div class="input-box">
                          <header>Nous contacter</header>

                          <div class="input-field">
                              <input type="text" name="sujet" id="email" placeholder="sujet" class="input" value="{{old('email')}}"/>                                        
                          </div>

                          <div class="input-field">
                            <input type="email" name="email" id="email" placeholder="email" class="input" value="{{old('email')}}"/>                                                                 
                          </div>

                          <div class="input-field">
                            <textarea name="message" id="" cols="30" rows="10" class="input2" placeholder="message"></textarea>                                        
                          </div>
                          @isset($Erreurlogin)
                              @if  ($Erreurlogin)
                                  <div class="alert alert-danger" role="alert">
                                     
                                  </div>   
                              @endif
                          @endisset
                          
                          <div class="input-field">
                              <input type="submit" name="submit" id="email" class="mysubmit" value="Envoyez"/>                                   
                          </div>


                      </div>
                  </form>
              </div>                       
          </div>                    
      </div> 
    </div>


    

  </main>
            </>;
    }
}

export default Contact;