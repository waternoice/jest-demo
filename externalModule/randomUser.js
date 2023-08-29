// randomUser.js
const axios = require('axios');

async function getRandomUser() {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    const user = response.data.results[0];

    return user;
  } catch (error) {
    throw new Error('Failed to fetch random user data');
  }
}

module.exports = getRandomUser;
