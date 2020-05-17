class JumboTron extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4 text-custom">DE PILEM DATABASE</h1>
                <h2 class="text-white">The most complete movies database in the world</h2>
                <input type="search" class="form-control btn-outline-light" placeholder="Search Movies"
                    id="search-jumbotron">
            </div>
        </div>`;
  }
}
customElements.define("jumbo-tron", JumboTron);
