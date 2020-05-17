class ModalTrailer extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
                <button type="button" class="btn btn-primary mb-3" 
                    data-toggle="modal" data-target="#trailerModal" id="btn-trailer">
                    Watch The Trailer
                </button>
                <div class="modal fade" id="trailerModal" tabindex="-1" role="dialog" 
                        aria-labelledby="trailerModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <button type="button" class="close text-right mr-3" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            <div class="modal-body trailer"></div>   
                        </div>
                    </div>
                </div>`;
    }
}
customElements.define('modal-trailer', ModalTrailer);