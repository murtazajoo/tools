import btns from "./source.js";
let main = document.getElementById("main");
let bsColors = {
  css: "primary",
  diagram: "secondary",
  image: "success",
  illustration: "success",
  icon: "danger",
  fonts: "danger",
  js: "warning",
  html: "info",
  design: "dark",
};
let finalHTML = "";

btns.map((e) => {
  let cato = e.category;
  let color = bsColors[cato];
  let dis = e.discription;
  let title = e.text;
  let link = e.link;
  finalHTML += `
    <button  
    type="button"
    class="btn btn-${color} mx-4 my-4  p-3 text-dark " 
    data-bs-container="body"
     data-bs-toggle="popover"
      data-bs-placement="top" 
      data-bs-content="${dis}"
        data-bs-trigger="hover"
 
 >
   <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-${color}">
     ${cato}
   </span>
  <a href="${link}" target="_blank" class="text-${color} text-decoration-none fw-bold"> ${title} <br> (<small class="text-dark">${link}</small>)</a>
 </button>
 
  `;
});

main.innerHTML = finalHTML;

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
