import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from "./pages/LandingPage";
import Explore from './pages/Explore';
import Test from './pages/Test';
import './App.css'; 
import Product from './pages/Product';

function App() {
  return (
    <Router> 
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pschometric-test" element={<Test />} />
            <Route path="/explore" element={<Explore />} /> 
            <Route path="/product" element={<Product />} />
          </Routes>
       
    </Router>
  );
}

export default App;
