import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function fetchCoffeeShops(borough) {
  return axios
    .get(`http://localhost:3000/coffeeshops?borough=${borough}`)
    .then(response => response.data.coffeeshops)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
}

function calculateTotalRevenue(coffeeShops) {
  return coffeeShops.reduce((total, coffeeShop) => total + coffeeShop.revenue, 0);
}

function CoffeeShopTable({ selectedBorough }) {
  const { data: coffeeShops, isLoading, isError } = useQuery(
    ['coffeeShops', selectedBorough],
    () => fetchCoffeeShops(selectedBorough),
    {
      enabled: !!selectedBorough,
    }
  );

  if (isLoading) {
    return <p>Loading coffee shop data...</p>;
  }

  if (isError) {
    return <p>Error: Unable to fetch coffee shop data.</p>;
  }

  if (!selectedBorough) {
    return ( <div style={{ textAlign: 'center'}}>
        <p>Borough: null </p>  
      <p>Total Revenue : 0 </p>
      
      <table style={{ margin: '0 auto', backgroundColor: '#f2f2f2', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Coffee Shop</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Borough</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Revenue (£) </th>
          </tr>
        </thead>        
        </table>
      </div>)
  }

  // Filter coffeeShops based on the selectedBorough
  const filteredCoffeeShops = coffeeShops.filter(coffeeShop => coffeeShop.borough === selectedBorough);

  const totalRevenue = calculateTotalRevenue(filteredCoffeeShops);

  return (
    <div style={{ textAlign: 'center' }}>
        <p>Borough: {selectedBorough}</p>  
      <p>Total Revenue: {totalRevenue}</p>
      <table style={{ margin: '0 auto', backgroundColor: '#f2f2f2', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Coffee Shop</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Borough</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Revenue (£) </th>
          </tr>
        </thead>
        <tbody>
          {filteredCoffeeShops.map((coffeeShop, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e9e9e9' }}>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{coffeeShop.shop}</td>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{coffeeShop.borough}</td>
              <td style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>{coffeeShop.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoffeeShopTable;
