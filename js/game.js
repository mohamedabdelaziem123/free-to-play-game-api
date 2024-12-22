
export class RequestGame {
    constructor(instanceOfInterface) {
           this.instanceOfInterface =instanceOfInterface
       }
      async getGames() {
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1d04102e1amshf99a3178c2e9e35p126635jsn305c8005ef35',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.instanceOfInterface.getCategory()}`, options);
         let gameData = await response.json();
          this.instanceOfInterface.displayGame(gameData);
          this.instanceOfInterface.waitDetailsRequest()
        loading.classList.add("d-none");
    }
    
}