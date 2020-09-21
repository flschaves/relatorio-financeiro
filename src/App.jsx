import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </React.Suspense>
  );
};

export default App;