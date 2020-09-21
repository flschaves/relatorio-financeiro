import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import Layout from './components/Layout';
import Routes from './routes';

const App = () => {
  const theme = {
    light: {
      primary: '#3C1361',
      lighter: '#52307C'
    }
  };

  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Routes />
          </Router>
        </Layout>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;