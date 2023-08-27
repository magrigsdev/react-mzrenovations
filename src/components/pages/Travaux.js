import React, { Component } from 'react'
import Navbar from '../layouts/Navbar'

 class Travaux extends Component {

    constructor(props) {
        super(props)
        this.state = {
          data: [],
          name: "Travaux",
          message: "",
          erreur: ""
        }
    }
    
  render() {
    return (
      <>
        <Navbar CurrentPage={this.state.name} />
        <main id="main">


<div class="breadcrumbs d-flex align-items-center Mybg" >
<div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

    <h2>{this.state.name} </h2>
    <ol>
    <li><a href="/">Accueil</a></li>
    <li>{this.state.name} </li>
    </ol>

</div>
</div>
<section id="blog" class="blog">
<div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4 posts-list">

        @foreach ($travaux as $item)
        <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-100">

            <div class="post-content d-flex flex-column">

                <h3 class="post-title text-capitalize"> titre  </h3>

            
                <div class="meta d-flex align-items-center">
                    <div class="d-flex align-items-center">
                      <span class="ps-2">Montants :  montants  <i class="bi bi-currency-euro"></i></span>
                    </div>
                </div>

                <div class="meta d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="ps-2">Materiel :  <i class="bi bi-disc"></i> materiel,  </span>
                  </div>
                </div>

                <div class="meta d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="ps-2">Date de debut :  <i class="bi bi-calendar-date"></i> date_debut  </span>
                  </div>
                </div>

                <div class="meta d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="ps-2">Date de fin :  <i class="bi bi-calendar2"></i> date_fin  </span>
                  </div>
                </div>
                

                <div class="meta d-flex align-items-center mt-10">
                  <div class="d-flex align-items-center">
                    <span class="ps-2"> description  </span>
                  </div>
                </div>
              </div>

            </div>
        </div>
        @endforeach


    </div>

    
</div>
</section>

</main>
      </>
    )
  }
}
export default Travaux;
