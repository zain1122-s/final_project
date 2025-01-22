let URL = "https://icanhazdadjoke.com/";

function fetchDadJokes() {
  return new Promise((resolve, reject) => {
    fetch(URL, {
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          reject("failed to fetch");
        }
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const clickBtn = document.getElementById("dadJokes");

clickBtn.addEventListener("click", async () => {
  const jokesContainer = document.getElementById("main_content");
  jokesContainer.innerHTML = ""; // Clear previous jokes

  try {
    const jokes = [];
    for (let i = 0; i < 5; i++) { // Fetch 5 jokes
      const jokeData = await fetchDadJokes();
      jokes.push(jokeData.joke);
    }
    jokes.forEach((joke) => {
      const jokeElement = document.createElement("p");
      jokeElement.innerText = joke;
      jokesContainer.appendChild(jokeElement);
    });
  } catch (err) {
    jokesContainer.innerText = err;
  }
});