
import './App.css';
import HelloWorld from './component/HelloWorld';
import Nav from './component/Nav';

// import Picture from './component/Picture';
 import Slider from './component/Slider';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
 
      <Router>
      <Nav />
      
      <Routes>
      <Route exact path="/reactdem" element={<HelloWorld />} />
      <Route exact path="/slider" element={<Slider /> } />
      
        
      
      
      </Routes>
    </Router>
  
  );}
export default App;
