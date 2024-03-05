import React, { useEffect, useState } from 'react';
import HouseCard, {House} from '../components/HouseCard';
import Spinner from '../components/Spinner';

const IndexPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await fetch('http://localhost:3000/houses');
        const data = await response.json();
        console.log('Response data:', data);
        setHouses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching houses:', error);
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="container">
      <h1>Wizard World Houses</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="house-list">
          {houses.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IndexPage;