
let navBar = document.getElementById("navbar__item");
let contents = document.querySelectorAll("section");


// append li dynamic
contents.forEach((element)=>{
  listItem = document.createElement("li");
  listItem.innerHTML = `<li><a href="#${element.id}" data-item="${element.id}" class="menu__link">${element.dataset.nav}</a></li>`;
  navBar.appendChild(listItem); 
})



// styling for the active class with getBoundingClientRect
window.onscroll = ClientRect;
function ClientRect() {
  contents.forEach(function (element) {
 
    const  rect = element.getBoundingClientRect();

    if (
      element.getBoundingClientRect().top<window.innerHeight
    ) {
      AddActiveClass(element.id)
     
     
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
       AddActiveClass(`${e.target.dataset.item}`)
      setTimeout(() => {
        location.hash = `${e.target.dataset.item}`;
      }, 300);
    }
}
function AddActiveClass(id){

  // add li active
  document.querySelector('.active')?.classList.remove('active');
  document.querySelector(`[href='#${id}']`).classList.add('active');

//  add active to section
  document.querySelector(".your-active-class").classList.remove('your-active-class');
    document.querySelector(`#${id}`).classList.add('your-active-class');


}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar__menu") {
    x.className += " responsive";
  } else {
    x.className = "navbar__menu";
  }
}

