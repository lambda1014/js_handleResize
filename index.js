// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const bgBody = document.querySelector("body");

function handleResize() {
  if (window.innerWidth > 800) {
    bgBody.bgColor = "#fbc531";
  } else if (window.innerWidth > 400) {
    bgBody.bgColor = "#8c7ae6";
  } else {
    bgBody.bgColor = "#0097e6";
  }
}

if (bgBody) {
  bgBody.bgColor = "#0097e6";
  window.addEventListener("resize", handleResize);
}
