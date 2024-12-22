import { Details } from "./details.js";
//====================================not needed=====================//
class GamesCategory{
    gameCategory;
    constructor(gameCategory) {
        this.gameCategory = gameCategory;

    }
     getCategory() {
        return this.gameCategory;
    }
    setCategory(Category) {
        this.gameCategory = Category;
    }
}
//====================================not needed=====================//
export class Interface extends GamesCategory{
    
    constructor(gamesCategory) {
        super(gamesCategory);

    }
    displayGame(gameData) {
        let gamesBox = ``;
        for (let i = 0; i < gameData.length; i++) {
           gamesBox += `
           <div class="col">
           <div id="${gameData[i].id}"  class="card h-100 bg-transparent" role="button" ">
              <div  class="card-body">
                 <div class="position-relative">
                    <img class="card-img-top object-fit-cover h-100" src="${gameData[i].thumbnail}" />
                 </div>
                 <div>
                    <div class="hstack pt-3 justify-content-between">
                       <h3 class="h6 small">${gameData[i].title}</h3>
                       <span class="badge text-bg-primary p-2">Free</span>
                    </div>
                    <p class="card-text small text-secondary text-center opacity-50">
                       ${gameData[i].short_description.substring(0,gameData[i].short_description.lastIndexOf(" ",40)).trim()}
                    </p>
                 </div>
              </div>
              <div class="card-footer small text-white hstack justify-content-between">
                 <span class="badge badge-color">${gameData[i].genre}</span>
                 <span class="badge badge-color">${gameData[i].platform}</span>
              </div>
           </div>
        </div>
           `;
        }
       document.getElementById("gameData").innerHTML = gamesBox;
      
   }
   
   displayDetails(data) {
      let detail =`
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;
      document.getElementById("detailsContent").innerHTML = detail;
   }


    waitDetailsRequest() {
       let that = this;
       const game = document.querySelectorAll(".card");
      for (let i = 0; i < game.length;i++){
         game[i].addEventListener("click", () => {
            let id = game[i].id;
            new Details(id, that).getDetails();
         });
      }
      
   }
   closeDetailsRequest(){
      document.getElementById("btnClose").addEventListener("click", () => {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });
   }
}