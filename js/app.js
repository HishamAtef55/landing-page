const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

// append li dynamic
function createListItem() {
  for (const sec of sections) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
    navList.appendChild(listItem);
  }
}
createListItem();
// styling for the active class with getBoundingClientRect
window.onscroll = () => {
  document.querySelectorAll("section").forEach(function (active) {
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  });
};
// when click on item from navigation menu the link should scroll to the appropriate section

navList.addEventListener("click", (toSec) => {
  toSec.preventDefault();

  if (toSec.target.dataset.nav) {
    document
      .getElementById(`${toSec.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${toSec.target.dataset.nav}`;
    }, 300);
  }
});
