import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import Sidebar from './Components/Sidebar/sidebar';
import Footer from './Components/Footer/footer';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';

function App() {

  return (
    <div className="App">
     
     <h1>hello</h1>
     <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
     </Router>

    </div>
  );
}

export default App;
