const d = document,
  $body = d.querySelector("body"),
  $cursor = d.getElementById("cursor"),
  $links = d.querySelectorAll("a"),
  $Themebtn = d.querySelector(".btn-theme"),
  $containerBtn = d.querySelector(".btn-container"),
  $darkTheme = d.querySelector(".dark"),
  $btnMenu = d.querySelector(".btn-menu"),
  $btnMenuIn = d.querySelector(".hamburger-inner"),
  $panel = d.querySelector(".header .nav");
console.log($panel);

d.addEventListener("DOMContentLoaded", () => {
  tunedCursor();
  hoverLinks($links);
  backgroundTheme($Themebtn);
  menuHamburger($btnMenu, $panel)
});

// Hacer el cursor personalizado más pequeño cuando pase por links
function hoverLinks(link) {
  // Iteramos sobre las listas de elementos ya que el addEventListener se tiene que hacer por separado a cada elemento
  link.forEach((lin) => {
    lin.addEventListener("mouseover", () => {
      $cursor.classList.add("mini");
    });
    lin.addEventListener("mouseout", () => {
      $cursor.classList.remove("mini");
    });
  });
}
// Cursor personalizado
function tunedCursor() {
  // Función para hacer un cursor personalizado
  d.addEventListener("mousemove", (e) => {
    // console.log(e.clientX);
    let clientX = e.clientX,
      clientY = e.clientY;

    $cursor.style.left = clientX - 15 + "px";
    $cursor.style.top = clientY - 15 + "px";
  });
}
// Botón tema claro/oscuro
function backgroundTheme(btn) {
  d.addEventListener("click", (e) => {
    if (e.target === btn) {
      $body.classList.toggle("ligth");
      $Themebtn.classList.toggle("hidden");
      $darkTheme.classList.toggle("hidden");
    }
  });
}
// Menú hamburguesa
function menuHamburger(btnPanel,menu ) {
  d.addEventListener("click", e=> {
    if (e.target === (btnPanel) || e.target === $btnMenuIn) {
      btnPanel.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    }
  })
}