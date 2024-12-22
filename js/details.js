
export class Details {
    constructor(id,instanceOfInterface) {
        this.id = id;
        this.instanceOfInterface =instanceOfInterface
    }

    async getDetails() {
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '1d04102e1amshf99a3178c2e9e35p126635jsn305c8005ef35',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options);
         let gameData = await response.json();
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        this.instanceOfInterface.displayDetails(gameData);
        this.instanceOfInterface.closeDetailsRequest();
        loading.classList.add("d-none");
    }


}