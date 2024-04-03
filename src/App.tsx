import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';
import ABApolloCliente from './componentes/ABApolloCliente';

const queryClient = new QueryClient()

function App() {
  return (
    <ABApolloCliente>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </ABApolloCliente>
  );
}

export default App;
