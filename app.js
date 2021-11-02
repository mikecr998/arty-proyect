const menu_icon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu")
const btn_acordeon = document.querySelectorAll(".btn-acordeon")
const btnModal = document.querySelector("#btn-modal")
const modal = document.querySelector("#lamascara")
const cerrar = document.querySelector("#btn-cerrar")
const article1 = document.querySelector("#opc1")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const articles = document.querySelectorAll(".tab")
const elementoActivo = document.getElementsByClassName("tab-activo")


document.addEventListener("DOMContentLoaded", funciones)

function funciones() {
  // Funcionamiento del boton subir
  $('.btn-up').click(function (){
    $('html,body').animate({
      scrollTop: "0px",
    }, 1000);
   });
  // Funcionamiento menu movil
  menu_icon.addEventListener("click", ()=> {
    menu_icon.classList.toggle("activo")
    menu.classList.toggle("activo")
  })
  // Funcionamiento acordeon
  $(".btn-acordeon").click(function() {
    const elemento = $(this)
    console.log(elemento.parent())
    elemento.parent().next().slideToggle()
    if(elemento[0].classList.contains("fa-plus-square")) {
      $(elemento[0]).removeClass("fa-plus-square")
      $(elemento[0]).addClass("fa-minus-square")
    } else {
      $(elemento[0]).addClass("fa-plus-square")
      $(elemento[0]).removeClass("fa-minus-square")
    }
  })
  // Tabs
  btn1.classList.add("tab-activo")
  esconderArticles()
  article1.style.display = "flex"

  btn1.addEventListener("click",(e)=>{e.preventDefault(),activarClase(btn1)})
  btn2.addEventListener("click",(e)=>{e.preventDefault(),activarClase(btn2)})
  btn3.addEventListener("click",(e)=>{e.preventDefault(),activarClase(btn3)})
}

  function esconderArticles() {
    console.log("Hey")
    articles.forEach(article => {
      article.style.display= "none"
    })
  }
  function activarClase(btn) {
      elementoActivo[0].classList.remove("tab-activo")
      esconderArticles()
      btn.classList.add("tab-activo")
      const id = btn.attributes[0].value.slice(1)
      const articleMostrar = document.getElementById(id)
      articleMostrar.style.display = "flex"
}

// Animaciones
gsap.from(".btn-up", {scrollTrigger: {trigger: ".btn-up", start: "top 0%"},duration: 1, x: 150});

if(window.innerWidth > 1400) {
  gsap.from(".menu-container", {duration: 1, x: "100%"})
}
gsap.from(".titulos-principales-gsap", {duration: 1, x: -150, stagger: 0.25});
gsap.from(".barras1-gsap", { duration: .5, ease: "expo.inOut", x: "50%", stagger: 0.25 });

gsap.from(".quienes-somos-gsap", {scrollTrigger: ".quienes-somos-gsap", x: -150, duration: 1, stagger: 0.25});
gsap.from(".barras2-gsap", {scrollTrigger: ".barras2-gsap", duration: 0.25, y: 150, stagger: 0.25});

gsap.from(".nuestros-proyectos-gsap", {scrollTrigger: ".nuestros-proyectos-gsap", x: -150, duration: 1});
gsap.from(".foto-galeria-gsap", {scrollTrigger: ".foto-galeria-gsap", y: 150, duration: 0.5, stagger: 0.25});

gsap.from(".boton-gsap", {scrollTrigger: ".boton-gsap", x: 80, duration: 1});

gsap.from(".casos-exito-gsap", {scrollTrigger: ".casos-exito-gsap", x: -150, duration: 1});

gsap.from(".clientes-gsap", {scrollTrigger: ".clientes-gsap", x: 100, duration: 1});
gsap.from(".img-cliente", {scrollTrigger: ".img-cliente", y: 150, duration: 0.25, stagger: 0.25});

gsap.from(".equipo-gsap", {scrollTrigger: ".equipo-gsap", x: -150, duration: 1});
if(window.innerWidth > 480) {
  gsap.from(".personas-gsap", {scrollTrigger: ".personas-gsap", y: 150, duration: 0.25, stagger: 0.25});
} else {
  gsap.from(".persona1-gsap", {scrollTrigger: ".persona1-gsap", x: 40, duration: 0.5});
  gsap.from(".persona2-gsap", {scrollTrigger: ".persona2-gsap", x: -40, duration: 0.5})
  gsap.from(".persona3-gsap", {scrollTrigger: ".persona3-gsap", x: 40, duration: 0.5});
  gsap.from(".persona4-gsap", {scrollTrigger: ".persona4-gsap", x: -40, duration: 0.5})
}

gsap.from(".titulo-servicios-gsap", {scrollTrigger: ".titulo-servicios-gsap", y: 100, duration: 1});
if(window.innerWidth > 480) {
  gsap.from(".servicios-gsap", {scrollTrigger: ".servicios-gsap", y: 150, duration: 0.15, stagger: 0.15});
} else {
  gsap.from(".servicio1-gsap", {scrollTrigger: ".servicio1-gsap", y: 50, duration: 0.5});
  gsap.from(".servicio2-gsap", {scrollTrigger: ".servicio2-gsap", y: 50, duration: 0.5})
  gsap.from(".servicio3-gsap", {scrollTrigger: ".servicio3-gsap", y: 50, duration: 0.5});
  gsap.from(".servicio4-gsap", {scrollTrigger: ".servicio4-gsap", y: 50, duration: 0.5})
  gsap.from(".servicio5-gsap", {scrollTrigger: ".servicio5-gsap", y: 50, duration: 0.5})
}

gsap.from(".titulo-proyectos-gsap", {scrollTrigger: ".titulo-proyectos-gsap", x: -100, duration: 1});

gsap.from(".form-gsap", {scrollTrigger: ".form-gsap", y: -100, duration: 0.5});


