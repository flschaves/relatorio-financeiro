import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import Routes from './routes';

const App = () => (
  <React.Suspense fallback={<div>Carregando...</div>}>
    <Layout>
      <Router>
        <Routes />
      </Router>
    </Layout>
  </React.Suspense>
);

export default App;