
let navBar = document.getElementById("navbar__item");
let contents = document.querySelectorAll("section");


// append li dynamic
contents.forEach((element)=>{
  listItem = document.createElement("li");
  listItem.innerHTML = `<li><a #${element.id} data-item="${element.id}" class="menu__link">${element.dataset.nav}</a></li>`;
  navBar.appendChild(listItem); 
})



// styling for the active class with getBoundingClientRect
window.onscroll = ClientRect;
function ClientRect() {
  contents.forEach(function (element) {
    const  rect = element.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      element.classList.add("your-active-class");
    }
    else {
      element.classList.remove("your-active-class");
    }
  });
};
// when click on item from navigation menu the link should scroll to the appropriate section

navBar.addEventListener("click", scrollToContent);
function scrollToContent(e){
    e.preventDefault();
    if (e.target.dataset.item) {
      document
        .getElementById(`${e.target.dataset.item}`)
        .scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        location.hash = `${e.target.dataset.item}`;
      }, 300);
    }
}
