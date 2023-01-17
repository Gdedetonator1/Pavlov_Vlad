function openmenu_head() {
  var links = document.querySelector(".links");
  var btn = document.querySelector(".header_menu_button img");
  var is_open = links.getAttribute("data-open");

  if (is_open === "false") {
    links.style.right = "0%";
    links.style.opacity = "1";
    links.style.transition = "0.5s";
    links.setAttribute("data-open", "true");
  } else {
    links.style.right = "-101%";
    links.setAttribute("data-open", "false");
  }
}
