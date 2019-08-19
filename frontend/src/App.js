import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './component/Homepage';
import SubjectPage from './component/SubjectPage';
import About from './component/About';
import Admin from './component/Admin';
import Contact from './component/Contact';
import Header from './component/parts/Header';


function App() {

  return (
      <BrowserRouter >
            <Header />
              <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/admin" component={Admin} />
                  <Route exact path="/contact" component={Contact} />
                  <Route path="/sub/:sub" component={SubjectPage} />
              </Switch>

      </BrowserRouter>
  );
}

export default App;
