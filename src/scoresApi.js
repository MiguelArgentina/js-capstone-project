const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

const createGameUrl = baseUrl + 'games/';
const apiKey = "v6Go85O4ifWJZhFDvUSn";
const scoresDataUrl = createGameUrl + apiKey + '/scores/'


async function gameApiRequest(url, httpMethod, params) {
  url == null ? url = scoresDataUrl : url = url;
  let options = ''
  if (httpMethod == 'POST') {
    options = {
      method: httpMethod,
      headers: {
        "Content-Type": "application/json"
      },
      body: params,
    };
  } else {
    options = {
      method: httpMethod,
    };
  }

  const response = await fetch(url, options);
  console.log('Status: ', response.status)
  console.log('Ok: ', response.ok)
  console.log(response)
  const json = await response.json();
  return json;
}


function createGame(createGameUrl) {
  const params = {
    'name': 'Tucu Game2',
  };

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
  };

  fetch(createGameUrl, options)
    .then((response) => {
      console.log('Status: ', response.status);
      return response.json();
    })
    .then((res) => {
      console.log(res.result);
      //document.body.innerHTML = res.result;
    })
    .catch(err => console.log(err))

}

async function createGameAsync(createGameUrl) {
  const params = {
    'name': "Tucu Game2",
  };

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params),
  };

  let response = await fetch(createGameUrl, options)
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    const error = await response.json()
    console.error(error.message)
    return
  } else {
    console.log("Status: ", response.status);
  }

  let res = await response.json()
  console.log(res.result);
  //document.body.innerHTML = res.result;
}

//createGame(createGameUrl);
//createGameAsync(createGameUrl);
const createScore = (playerName, playerScore) => {
  const params = {
    user: playerName,
    score: playerScore,
  }
  return JSON.stringify(params)
}

const populateScoreboard = (scores) => {
  const scoreBoard = document.getElementById("scoreboard");

  scores.forEach((score) => {
    let liItem = document.createElement("li");
    liItem.innerText = score.user + ": " + score.score;
    scoreBoard.appendChild(liItem);
  });
}

//gameApiRequest(scoresDataUrl, "POST", createScore("Tucu", 20));
//gameApiRequest(scoresDataUrl, "GET", '');
export { gameApiRequest, createScore }