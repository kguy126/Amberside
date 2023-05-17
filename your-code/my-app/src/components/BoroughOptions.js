import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function fetchAllBoroughsStatistics() {
  return axios
    .get('http://localhost:3000/allboroughs')
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.response.data.message);
    });
}

function BoroughOptions({ setSelectedBorough }) {
  const { data: boroughsStatistics, isLoading, isError } = useQuery('boroughsStatistics', fetchAllBoroughsStatistics);

  const handleBoroughChange = event => {
    const selectedBorough = event.target.value;
    setSelectedBorough(selectedBorough);
  };

  if (isLoading) {
    return <p>Loading borough statistics...</p>;
  }

  if (isError) {
    return <p>Error: Unable to fetch borough statistics.</p>;
  }

  // Convert the borough statistics object to an array
  const boroughsArray = boroughsStatistics.borough || [];

  return (
    <div>
      <label htmlFor="borough-select">Choose a Borough: </label>
      <select id="borough-select" onChange={handleBoroughChange}>
        <option value=""></option>
        {boroughsArray.map(boroughStats => (
          <option key={boroughStats.borough} value={boroughStats.borough}>
            {boroughStats.borough}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BoroughOptions;
