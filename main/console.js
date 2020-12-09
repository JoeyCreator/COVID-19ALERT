console.log(
  "%cStop!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);

console.log(
  "%cThis is a browser feature intended for developers.",
  "color:black;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:arial"
);

console.log(
  "%cSee https://softwareqc.netlify.app for more information.",
  "color:black;font-family:system-ui;font-size:1.2rem;-webkit-text-stroke: 1px black;font-weight:arial"
);

function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#theme").addEventListener("change", function () {
    applyTheme(this.value);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "auto";

  applyTheme(savedTheme);

  for (const optionElement of document.querySelectorAll("#theme option")) {
    optionElement.selected = savedTheme === optionElement.value;
  }

  document.querySelector("#theme").addEventListener("change", function () {
    localStorage.setItem("theme", this.value);
    applyTheme(this.value);
  });
});
