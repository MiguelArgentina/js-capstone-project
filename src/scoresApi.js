import 'regenerator-runtime/runtime';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createGameUrl = `${baseUrl}games/`;
const apiKey = 'v6Go85O4ifWJZhFDvUSn';
const scoresDataUrl = `${createGameUrl + apiKey}/scores/`;
const fetch = require('node-fetch');

async function gameApiRequest(url, httpMethod, params) {
  if (url == null) {
    url = scoresDataUrl;
  }
  let options = '';
  if (httpMethod === 'POST') {
    options = {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: params,
    };
  } else {
    options = {
      method: httpMethod,
    };
  }

  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

const createScore = (playerName, playerScore) => {
  const params = {
    user: playerName,
    score: playerScore,
  };
  return JSON.stringify(params);
};

export { gameApiRequest, createScore };