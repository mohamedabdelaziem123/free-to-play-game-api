
import { Interface } from "./UI.js";
import {  RequestGame } from "./game.js";


new RequestGame(new Interface("mmorpg")).getGames();
     const navbar = document.querySelectorAll("ul a");
    
    for (let i = 0; i < navbar.length; i++){
      navbar[i].addEventListener("click", (e) => { 
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        new RequestGame(new Interface(e.target.id)).getGames();
      })
    }
