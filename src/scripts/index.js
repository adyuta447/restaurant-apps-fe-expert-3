// Import polyfill for async/await
import "regenerator-runtime";

// Import CSS styles
import "../styles/main.css";
import "../styles/responsive.css";

// Import necessary modules
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// Initialize the App
const app = new App({
  content: document.querySelector("#content"),
  menu: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  main: document.querySelector("main"),
});

// Event listener for hashchange
window.addEventListener("hashchange", () => {
  app.renderPage();
});

// Event listener for window load
window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
