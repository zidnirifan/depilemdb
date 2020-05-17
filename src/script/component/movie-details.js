import "./modal-trailer.js";
class MovieDetails extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute("src");
    this.title = this.getAttribute("title");
    this.tagline = this.getAttribute("tagline");
    this.overview = this.getAttribute("overview");
    this.rate = this.getAttribute("rate");
    this.country = this.getAttribute("country");
    this.date = this.getAttribute("date");
    this.genres = this.getAttribute("genres");
    this.runtime = this.getAttribute("runtime");

    this.innerHTML = `
            <div class="card mb-3 mt-4 details">
                <div class="row no-gutters">
                    <div class="col-md-3 text-center image">
                        <img src="http://image.tmdb.org/t/p/w500${this.src}" class="card-img">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body ml-4">
                            <h1 class="card-title text-custom">${this.title}</h1>
                            <p class="card-subtitle mb-2 text-muted">${this.country} | ${this.date} | 
                                ${this.genres} | ${this.runtime} |
                                <svg class="bi bi-star-fill text-warning" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg><span> ${this.rate}</span> 
                            </p>
                            <h4 class="text-muted"><q><i>${this.tagline}</i></q></h4>
                            <p class="card-text">
                                <strong>Overview: </strong>${this.overview}
                            </p>
                            <modal-trailer></modal-trailer>   
                        </div>
                    </div>
                </div>
            </div>`;
  }
}
customElements.define("movie-details", MovieDetails);
