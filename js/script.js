let navItems = document.querySelectorAll(".nav");
let container = document.querySelector(".container");
let url = "./partials/home.html";

function changePage(e){
  e.preventDefault();
  let clickLink = e.target;
  url = clickLink.href;
  handleAjax();
}
for(let navItem of navItems){
  	navItem.addEventListener("click", changePage);
}
function handleAjax(){
  // data inside the package
  fetch(url)
    .then(function (rsp){
        return rsp.text();
    })
    .then(function (data){
        container.innerHTML = data;
    });
};
handleAjax();
