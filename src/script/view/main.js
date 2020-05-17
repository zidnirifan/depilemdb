import DataSource from "../data/data-source.js";

const main = () => {
  DataSource.home();

  document.getElementById("keyword").addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      DataSource.searchMovie("#keyword");
    }
  });

  document
    .getElementById("search-button")
    .addEventListener("click", () => DataSource.searchMovie("#keyword"));

  document
    .getElementById("search-jumbotron")
    .addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        DataSource.searchMovie("#search-jumbotron");
      }
    });

  document
    .getElementById("keyword-mobile")
    .addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        DataSource.searchMovie("#keyword-mobile");
        DataSource.searchMobileActive();
      }
    });

  document
    .querySelector(".navbar-brand")
    .addEventListener("click", () => DataSource.onNavbarBrandClicked());

  document
    .querySelector(".bi-search")
    .addEventListener("click", DataSource.searchMobileActive);
  document
    .querySelector(".cancel")
    .addEventListener("click", DataSource.searchMobileActive);

  DataSource.parallax();
};
export default main;
