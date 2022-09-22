import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import {Switch, Route ,Redirect} from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';
const App = () => {
  return (
    <div>
    <NavBar/>
     <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
     </Switch>
     <Footer/>
    </div>
  )
}

export default App
