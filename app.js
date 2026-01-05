document.getElementById('newJokeButton').addEventListener('click', getNewJoke);

async function getNewJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
  const data = await response.json();
  console.log(data);

  let getSetup = document.getElementById("getSetup");
  let getPunchline = document.getElementById("getPunchline");

  getSetup.innerHTML = data.setup;
  getPunchline.innerHTML = data.punchline;
}

getNewJoke();
