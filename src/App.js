
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" page={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
