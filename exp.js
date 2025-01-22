let base_url = "https://icanhazdadjoke.com/";

function fetchDadJokes() {
   return new Promise((resolve, reject) => {
    fetch(base_url, {
        headers: {accept: "application/json"}	
    })
    .then((res) =>{
        if(res.ok){
            return res.json();
        } else {
            reject("failed to fetch");
        }
    })
    .then.apply((data) => {
        resolve(data);
    })
    .catch((error)=>{
        reject(error);
    });
   });
}


const clickBtn = document.getElementById("dadjpkes");

clickBtn.addEventListener("click", async () =>{
    const jokesContainer = document.getElementById("main_container");
    jokesContainer.innerHTML = "";

    try{
        const jokes = [];
        for(let i=o ; i<5; i++){
            const jokedata = await fetchDadJokes();
            jokes.push(jokedata.joke);;
        }
        jokes.forEach((joke)=>{
            const jokeElement = document.createElement("p");
            jokeElement.innerText = joke;
            jokesContainer.appendChild(jokeElement);
        });
    }catch (err){
        jokesContainer.innerText = err;
    }
})