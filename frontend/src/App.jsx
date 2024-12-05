import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from "./pages/LandingPage";
import Explore from './pages/Explore';
import Test from './pages/Test';
import './App.css';  // Import custom CSS for transitions
import Product from './pages/Product';

function App() {
  return (
    <Router> {/* Wrap your entire app inside BrowserRouter */}
      <TransitionGroup className="transition-container">
        <CSSTransition
          timeout={500}
          classNames="fade"
          key={window.location.pathname} 
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pschometric-test" element={<Test />} />
            <Route path="/explore" element={<Explore />} /> 
            <Route path="/product" element={<Product />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
