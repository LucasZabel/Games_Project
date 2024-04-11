// Css:
import './App.css';
// Hooks:
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages:
import FindOutNumbers from './pages/FindOutNumber/FindOutNumber';
import FindOutLetters from './pages/FindOutLetters/FindOutLetters';
import Home from './pages/Home/Home';
// Components:
import NavBar from './pages/components/NavBar/NavBar';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/find-out-numbers' element={<FindOutNumbers />} />
          <Route path='/find-out-letters' element={<FindOutLetters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
