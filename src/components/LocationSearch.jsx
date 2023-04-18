import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LocationSearch(location) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(`/api/locations?searchTerm=${searchTerm}`);
      setSearchResults(response.data);
    };
    fetchSearchResults();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationClick = async (locationId) => {
    const response = await axios.get(`/api/locations/${locationId}`);
    // Display location information
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((location) => (
            <li key={location.id} onClick={() => handleLocationClick(location.id)}>
              <div>{location.name}</div>
              <div>Type: {location.type}</div>
              <div>Dimension: {location.dimension}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSearch;
