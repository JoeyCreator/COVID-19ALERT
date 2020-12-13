console.log(
  "%cStop!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);

console.log(
  "%cThis is a browser feature intended for developers.",
  "color:black;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:arial"
);

console.log(
  "%cSee https://github.com/JoeyCreator/COVID-19ALERT/blob/main/LICENSE.md for more information.",
  "color:black;font-family:system-ui;font-size:1.2rem;-webkit-text-stroke: 1px black;font-weight:arial"
);

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
