import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';


class Apropos extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          name: "Apropos",
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

    
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">

          <div class="col-lg-7 about-img aboutImg"></div>

          <div class="col-lg-7">
            <h2 class="text text-uppercase text-warning">mz renovation</h2>
            <div class="our-story">
              <h4>France 1988</h4>
              <h3>Notre Histoire</h3>

              <p>Il y a plusieurs années, dans une petite ville pittoresque nommée Chaleurville, un entrepreneur passionné du nom de Marc Dupont avait une vision ambitieuse. Il rêvait de créer une entreprise qui non seulement aiderait les gens à économiser de l'énergie, mais qui créerait également un confort optimal dans leurs maisons. C'est ainsi qu'est née "IsolationConfort".</p>
              
              <p>Tout a commencé dans le garage de Marc. Avec seulement quelques outils et une poignée de matériaux isolants, il a commencé à travailler sur des projets d'isolation pour les maisons locales. Son attention méticuleuse aux détails et sa passion pour le confort des clients ont rapidement fait des merveilles. Les clients satisfaits ont commencé à parler de son entreprise et le bouche-à-oreille a commencé à se propager.</p>


            </div>
          </div>

        </div>

      </div>
    </section>
    


  </main>
            </>;
    }
}



export default Apropos;