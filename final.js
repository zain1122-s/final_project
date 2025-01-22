
let URL = "https://icanhazdadjoke.com/";

function fetchDadJokes(){
return new Promise((resolve, reject) => {
    fetch(URL, {
      headers: { Accept: "application/json" },
    }).then((res) => {
        console.log(res, "res");
        if (res.ok) {
          return res.json();
        } else {
          reject("failed to fetch");
        }
      }).then((data) => {
          resolve(data)
        console.log(data, "data");
      }).catch((err)=>{
              reject(err)
      });
  });
}


const clickBtn = document.getElementById("dadJokes");

clickBtn.addEventListener("click", ()=>{
    fetchDadJokes().then((data)=>{
        console.log(data, "data");
        document.getElementById("main_content").innerText = data.joke
    }).catch((err)=>{
        document.getElementById("main_content").innerText = err

    })
})