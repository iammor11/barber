import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';
import Price from './components/Price';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component{
  render(){
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Price} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      </BrowserRouter>
</div>
  );
}
}
export default App;
