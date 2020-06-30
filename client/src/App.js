import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
// import Detail from "./Components/Detail/Detail";
// import Footer from "./Components/Footer/Footer";




function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>
    </div>
  );
}

export default App;