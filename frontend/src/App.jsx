import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from "./pages/LandingPage";
import Explore from './pages/Explore';
import Test from './pages/Test';
import './App.css'; 
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router> 
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pschometric-test" element={<Test />} />
            <Route path="/explore" element={<Explore />} /> 
            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<SignUp/>} /> 
            <Route path="/product" element={<Product />} />
          </Routes>
       
    </Router>
  );
}

export default App;
