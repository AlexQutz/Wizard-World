const axios = require('axios');

const fetchHouses = async () => {
  try {
    const response = await axios.get('https://wizard-world-api.herokuapp.com/houses');
    return response.data;
  } catch (error) {
    console.error('Error fetching houses:', error);
    throw error;
  }
};

const filterHousesByName = async (name) => {
  try {
    const houses = await fetchHouses();
    return houses.filter(house => house.name.toLowerCase().includes(name.toLowerCase()));
  } catch (error) {
    console.error('Error filtering houses by name:', error);
    throw error;
  }
};

module.exports = {
  fetchHouses,
  filterHousesByName
};