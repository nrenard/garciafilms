import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Services from 'pages/Services';
import Envelope from 'pages/Envelope';
import Accessories from 'pages/Accessories';
import Contact from 'pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/empresa" component={About} exact />
    <Route path="/servicos" component={Services} exact />
    <Route path="/envelopamento" component={Envelope} exact />
    <Route path="/acessorios" component={Accessories} exact />
    <Route path="/contato" component={Contact} exact />
  </Switch>
);

export default Routes;
