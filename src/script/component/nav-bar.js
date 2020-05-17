class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-sm navbar-light">
                <div class="container">
                    <a class="navbar-brand text-light font-weight-bold" href="#">De PilemDB</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="form-inline ml-auto search">
                            <input class="form-control mr-sm-2 btn-outline-light" type="search" 
                                placeholder="Search Movies" aria-label="Search" id="keyword">
                            <button class="btn btn-outline-light my-2 my-sm-0 bg-custom" type="button"
                                id="search-button">Search</button>
                        </div>
                    </div>
                    <svg class="bi bi-search text-white d-block d-sm-none mr-2" width="1.5em" height="1.5em"
                        viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                            clip-rule="evenodd" />
                        <path fill-rule="evenodd"
                            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                            clip-rule="evenodd" />
                    </svg>
                    <div class="input-group mb-3 search-mobile">
                        <input type="search" class="form-control btn-outline-light" placeholder="Search Movies"
                            id="keyword-mobile">
                        <div class="input-group-append">
                            <button class="btn btn-outline-light bg-custom cancel" type="button">Cancel</button>
                        </div>
                    </div>
                </div>
            </nav>`;
  }
}
customElements.define("nav-bar", NavBar);
