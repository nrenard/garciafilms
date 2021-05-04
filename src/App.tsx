import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Theme from 'components/Theme';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from 'styles/global';

import Routes from 'routes';

const App: React.FC = () => (
  <Theme>
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes />

      <Footer />
    </BrowserRouter>
  </Theme>
);

export default App;
