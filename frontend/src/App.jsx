import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from "./pages/LandingPage";
import Explore from './pages/Explore';
import Test from './pages/Test';
import './App.css'; 
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Form from './pages/Form';
import Bot from './pages/Bot';
function App() {
  return (
    <Router> 
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pschometric-test" element={
              <ProtectedRoute>
                <Test/>
              </ProtectedRoute>
             } />
            <Route path="/explore" element={
              <ProtectedRoute>
                <Explore/>
              </ProtectedRoute>
              } /> 

<Route path="/form" element={
              <ProtectedRoute>
                <Form/>
              </ProtectedRoute>
              } /> 

<Route path="/bot" element={
              <ProtectedRoute>
                <Bot/>
              </ProtectedRoute>
              } /> 

            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<SignUp/>} /> 
            <Route path="/product/:id" element={<Product />} />
          </Routes>
       
    </Router>
  );
}

export default App;
