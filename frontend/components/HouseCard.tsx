import React from 'react';

export interface House {
  name: string;
  houseColours: string; 
  founder: string;
  animal: string;
}

interface HouseCardProps {
  house: House;
}

const colorMap: { [key: string]: string } = {
  'Scarlet': '#FF2400',
  'gold': '#FFD700',
  'Green': '#008000',
  'silver': '#C0C0C0',
  'Blue': '#0000FF',
  'bronze': '#CD7F32',
  'Yellow': '#FFFF00',
  'black': '#000000',
  // Add more color mappings as needed
};

const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  // Parse textual description and map to CSS color values
  const colors = house.houseColours
    .split(' and ')
    .map(color => color.trim())
    .map(color => colorMap[color]);

  const gradient = `linear-gradient(to right, ${colors.join(', ')})`;

  const barStyle: React.CSSProperties = {
    height: '10px',
    width: '100%',
    background: gradient,
    marginBottom: '10px',
  };

  const boxStyle: React.CSSProperties = {
    border: '2px solid transparent', 
    padding: '10px',
    borderRadius: '5px',
    position: 'relative',
    marginBottom: '2vh',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 1)',
    width: '25%',
  };

  const animalStyle: React.CSSProperties = {
    position: 'absolute',
    top: '5px',
    right: '5px',
  };

  return (
    <div className="house-card" style={boxStyle}>
      <h2>{house.name}</h2>
      <div style={barStyle}></div>
      <p>Founder: {house.founder}</p>
      <p style={animalStyle}>{house.animal}</p>
    </div>
  );
};

export default HouseCard;