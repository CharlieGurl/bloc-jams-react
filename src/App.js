import React, { Component } from 'react';
//import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
    
    <Router>
      <div>
        <Navbar /> 
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} /> 
        <Route path="/album/:slug" component={Album} /> 
      </div>
    </Router>
    );
  }
}



    /*  <div className="App">
      
        <header>
          <nav>
             <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link> 
          </nav> 
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} /> 
          <Route path="/album/:slug" component={Album} />  
        </main>
      </div>*/  


export default App;
