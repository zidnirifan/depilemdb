class CopyRight extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <p class="text-center text-white">Copyright &copy; 2020 | Designed with
            <svg class="bi bi-heart-fill text-white" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    clip-rule="evenodd" />
            </svg>
            by Zidni</p>`;
    }
}
customElements.define('copy-right', CopyRight);