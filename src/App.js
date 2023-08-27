import Home from './components/Home'
import Contact from './components/pages/Contact'
import {Routes, Route } from "react-router-dom"
import Dashbord from './components/pages/Dashbord';
import Travaux from './components/pages/Travaux';
import Isolation from './components/pages/Isolation';
import Apropos from './components/pages/Apropos';
import Page_404 from './components/Page_404';


function App(){
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element = { <Home /> } />
                <Route exact path="/contact" element = { <Contact /> } />
                <Route exact path="/travaux" element = { <Travaux /> } />
                <Route exact path="/isolation" element = { <Isolation /> } />
                <Route exact path="/apropos" element = { <Apropos /> } />
                <Route exact path="/dashbord" element = { <Dashbord /> } />
                <Route  path ="*" element = { <Page_404 /> } />

                <Route exact path="/isolation/:type" element = { <Isolation /> } />
            </Routes>
        </div>
    );
}

export default App;