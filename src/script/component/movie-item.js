class MovieItem extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src");
        this.movieId = this.getAttribute("movieId");
        this.rate = this.getAttribute("rate");
        this.title = this.getAttribute("title");
        this.date = this.getAttribute("date");

        this.innerHTML = `
        <div class="text-center image">
            <img src="http://image.tmdb.org/t/p/w500${this.src}" alt="Poster Not Found" 
                class="card-img-top poster-movie" data-idMovie="${this.movieId}">
        </div>
        <div class="card-body">
            <svg class="bi bi-star-fill text-warning" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg><span"> ${this.rate}</span>
            <h6 class="card-title movie-title" data-idMovie="${this.movieId}">${this.title}</h6>
            <p class="card-subtitle mb-2 text-muted card-year">${this.date}</p>
        </div>`;
    }
}
customElements.define('movie-item', MovieItem);