import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import logo from '../../my-app/src/ael-logo.png'
import CoffeeShopTable from './components/CoffeeShopTable';
import BoroughOptions from './components/BoroughOptions';

const queryClient = new QueryClient();

function App() {
  const [selectedBorough, setSelectedBorough] = useState('');

  const handleBoroughChange = selectedBorough => {
    setSelectedBorough(selectedBorough);
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{  justifyContent: 'center',  alignItems: 'center' , textAlign: 'center', flex: 'center'}}>
      <img src={logo} alt="Logo" />
          <h1>Coffee Shop Revenue App</h1>
        
        <BoroughOptions setSelectedBorough={handleBoroughChange}/>
        <CoffeeShopTable  selectedBorough={selectedBorough}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
