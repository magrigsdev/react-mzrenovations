
import Navbar from './layouts/Navbar'
import React, { Component } from 'react'

export class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      data :[],
      name: "Home",
      message:"",
      erreur:""
    }

  }
    

    componentDidMount(){
      fetch('http://127.0.0.1:8000/api/Listetravaux')
      .then((resp) =>{
        return resp.json()
      })
      .then((res) => {
        this.setState({ data: res });
        console.log(this.state.data.data)
       
      })
    }

  render() {
    return (
      <>
        <Navbar  CurrentPage={this.state.name} />

        <section id="hero" className="hero">
      
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            
              <h2 data-aos="fade-down">Bienvenue à <span>MZ Renovation</span>  </h2>
              <p data-aos="fade-up">Vous recherchez des services de maçonnerie de haute qualité pour votre projet de construction ou de rénovation ? Ne cherchez plus ! Nous sommes spécialisés dans les travaux de maçonnerie générale et de gros œuvre dans le domaine du bâtiment.
              </p> 
            </div>
          </div>
        </div>
      </div>

      <div id="hero-carousel" className="carousel slide home_hero" data-bs-ride="carousel" data-bs-interval="5000">

        <div className="carousel-item active" ></div>
        <div className="carousel-item item2" ></div>
        <div className="carousel-item item3" ></div>
        <div className="carousel-item item4" ></div>
        <div className="carousel-item item5" ></div>

        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>

        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>

      </div>

        </section>

        <main id="main">

      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Travaux de Renovations</h2>  
            <p>Notre équipe de maçons expérimentés est prête à mettre son expertise à votre service pour réaliser vos projets les plus ambitieux. Que ce soit la construction d'une nouvelle maison, la rénovation d'un bâtiment existant ou la création d'une extension, nous avons les compétences nécessaires pour mener à bien chaque étape de votre projet.</p>
          </div>

          <div className="row gy-4 Home_section">

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg mur"></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">rénovation du mur.</h4>
                      <p>La rénovation du mur est une étape essentielle pour transformer l'apparence et l'ambiance d'une pièce. Que vous souhaitiez moderniser votre intérieur, réparer des dommages ou simplement apporter une touche de fraîcheur, la rénovation du mur peut faire toute la différence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg fenetre" ></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">rénovation des Fenètres</h4>
                      <p>La rénovation des fenêtres apporte de nombreux avantages à votre maison. Non seulement elle améliore l'esthétique de votre extérieur, mais elle contribue également à l'efficacité énergétique et au confort intérieur. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card-item">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="card-bg toiture"></div>
                  </div>
                  <div className="col-xl-7 d-flex align-items-center">
                    <div className="card-body">
                      <h4 className="card-title">Renovation de la toîture</h4>
                      <p>La rénovation de la toiture est une étape cruciale dans l'entretien et la préservation de votre bâtiment. Une toiture en bon état joue un rôle essentiel dans la protection contre les intempéries, les fuites d'eau et les dommages structurels potentiels.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>Isolation</h2>
            <p>Nos services de maçonnerie spécialisés dans l'isolation offrent une solution complète pour améliorer l'efficacité énergétique de votre bâtiment. </p>
          </div>

          <div className="row gy-4">

          

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Isolez vos murs</h3>
                <p>La rénovation du mur est une étape essentielle pour transformer l'apparence et l'ambiance d'une pièce.</p>
                <a href=" " className="readmore stretched-link">plus <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>Isolez la toîture </h3>
                <p>La rénovation de la toiture est une étape cruciale dans l'entretien et la préservation de votre bâtiment.</p>
                <a href="" className="readmore stretched-link">plus <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item position-relative">
                <div className="icon">
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>Isolez les Fenètres</h3>
                <p>La rénovation des fenêtres apporte de nombreux avantages à votre maison.</p>
                <a href="" className="readmore stretched-link">plus <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            

          </div>

        </div>
      </section> 

      
      <section id="alt-services" className="alt-services home_services">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-around gy-4">
            <div className="col-lg-6 img-bg" data-aos="zoom-in" data-aos-delay="100"></div>

            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Nos Valeurs</h3>
              <p>Ces valeurs sont essentielles pour établir une réputation solide et gagner la confiance des clients dans le secteur de la rénovation.</p>

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-easel flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Durabilité </a></h4>
                  <p>Dans un contexte de sensibilisation croissante à l'environnement, une entreprise de rénovation responsable intègre des pratiques durables dans ses activités. </p>
                </div>
              </div> 

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Qualité </a></h4>
                  <p>L'entreprise de rénovation doit s'engager à fournir un travail de qualité supérieure. Cela implique d'utiliser des matériaux de premier choix,</p>
                </div>
              </div> 

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Professionnalisme </a></h4>
                  <p> L'entreprise doit faire preuve de professionnalisme à tous les niveaux, que ce soit dans la communication avec les clients,</p>
                </div>
              </div> 

              <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-brightness-high flex-shrink-0"></i>
                <div>
                  <h4><a href="" className="stretched-link">Service client</a></h4>
                  <p> Une entreprise de rénovation de qualité accorde une grande importance à la satisfaction de ses clients. </p>
                </div>
              </div> 

            </div>
          </div>

        </div>
      </section> 

      
    <section id="recent-blog-posts" className="recent-blog-posts">
      <div className="container" data-aos="fade-up">

          <div className=" section-header">
            
            <h2>Recents Travaux</h2>
                  
            <p>Les travaux réalisés par cette entreprise ont été exemplaires du début à la fin. Leur équipe qualifiée et dévouée a su gérer chaque aspect du projet avec expertise et professionnalisme. </p>
          
          </div>
          <p>test   </p>

          { 
            (() =>{if (this.state.data.status) 
              {
                return <> { this.state.data.hasOwnProperty('data') ? 
                (<>
                data est la
                {this.state.data.data.map((item, key) =>( 
                <> 
                <h1> {key} </h1>  
                <h2> {item.date_debut} </h2>      
                
                 </>) )}
                
                </>

                ) : 
                (<>data no</>)}</>

                
              } 
                else return <>
                      <div className="alert alert-danger">
                         <strong>Desolé!</strong> { this.state.data.message } 
                       </div>  
                      </>
               })()  
            }  
        
          

      </div>
    </section>
  </main>
      </>
    )
  }
}

export default Home