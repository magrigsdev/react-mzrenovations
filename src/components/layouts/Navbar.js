import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    //get 
    const { CurrentPage } = this.props

    return (

      <>
        <header id="header" className="header d-flex align-items-center">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="#" className="logo d-flex align-items-center">
              {/* Uncomment the line below if you also wish to use an image logo  */}
              {/* {{-- <!-- <img src="{{asset('assets/img/logo.png')}}" alt=""> --> --}} */}
              <h1>MZ<span>renovation</span></h1>
            </a>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" className="navbar">
              {/* Accueil */}
              <ul>
                <li><a href="/" className={`navbar ${CurrentPage ==='Home' ? 'active' : ''}`}> Accueil</a></li>
                <li><a href="/travaux" className={`navbar ${CurrentPage ==='Travaux' ? 'active':''}`}>Travaux</a></li>
                <li><a href="/isolation" className={`navbar ${CurrentPage ==='Isolation' ? 'active':''}`}>Isolation</a></li>
                
                {/* <li className="dropdown" ><a href="#"><span>Isolation</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul className="list_isolations">

                    <li><a href="">Murs</a></li>
                    <li><a href="">Fenètres</a></li>
                    <li><a href="">Toiture </a></li>

                  </ul>
                </li> */}

                <li><a href="/apropos"  className={`navbar ${CurrentPage ==='Apropos' ? 'active':''}`}>A propos</a></li>
                <li><a href="/contact" className={`navbar ${CurrentPage  ==='Contact'? 'active':''}`}>Contact</a></li>
                <li>
                  {/* 
          @if(session('identifiant'))
            
            <li className="dropdown" ><a href="#">   <span> {{session('identifiant') }}    </span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul className="list_isolations">
                <li><a href="{{ url('logout') }}">deconnection</a></li>
              </ul>
          </li>
          @else
              <a href="{{ url('login')}}" className="{{ request()->is('login') ? 'active' : ''}}">
            Login
              </a>
          @endif */}
                </li>
              </ul>
            </nav>

          </div>
          {/* <Route exact pathname='/'  Component={Home}/> 
    <Route pathname='/contact' Component={Contact} />  */}
        </header>
      </>
    );
  }
}


export default Navbar