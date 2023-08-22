import React from 'react'

function Navbar() {
  return (
    <>
      <header id="header" class="header d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="#" class="logo d-flex align-items-center">
      {/* Uncomment the line below if you also wish to use an image logo  */}
        {/* {{-- <!-- <img src="{{asset('assets/img/logo.png')}}" alt=""> --> --}} */}
        <h1>MZ<span>renovation</span></h1>
    </a>

    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
    <nav id="navbar" class="navbar">
        <ul>
        <li><a href=""  class="active">Accueil</a></li>
        <li><a href="" class="">Travaux</a></li>
        
        
        <li><a href="" class="">isolation</a></li>
          
            <li class="dropdown" ><a href="#"><span>Isolation</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul class="list_isolations">

              <li><a href="">Murs</a></li>           
              <li><a href="">Fenètres</a></li>
              <li><a href="">Toiture </a></li>

              </ul>
            </li>
        

        <li><a href="" class="">A propos</a></li>
        <li><a href=" " class="">Contact</a></li>
        <li>
            {/* 
          @if(session('identifiant'))
            
            <li class="dropdown" ><a href="#">   <span> {{session('identifiant') }}    </span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul class="list_isolations">
                <li><a href="{{ url('logout') }}">deconnection</a></li>
              </ul>
          </li>
          @else
              <a href="{{ url('login')}}" class="{{ request()->is('login') ? 'active' : ''}}">
            Login
              </a>
          @endif */}
        </li>
        </ul>
    </nav>

    </div>
  </header>  
    </>
  )
}

export default Navbar