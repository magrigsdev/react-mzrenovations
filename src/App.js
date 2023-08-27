import Home from './components/Home'
import Contact from './components/pages/Contact'
import {Routes, Route } from "react-router-dom"
import Dashbord from './components/pages/Dashbord';
import Travaux from './components/pages/Travaux';
import Isolation from './components/pages/Isolation';
import Apropos from './components/pages/Apropos';


function App(){
    return (
        <div className="App">
            <Routes>
                <Route path="/" element = { <Home /> } />
                <Route path="/contact" element = { <Contact /> } />
                <Route path="/travaux" element = { <Travaux /> } />
                <Route path="/isolation" element = { <Isolation /> } />
                <Route path="/apropos" element = { <Apropos /> } />
                <Route path="/dashbord" element = { <Dashbord /> } />
            </Routes>
        </div>
    );
}

export default App;