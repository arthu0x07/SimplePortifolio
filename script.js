// Criando menu Hamburguer
var IsOppen = false;

var headerMenu = document.querySelector(".header-menu");

buttonMenu = document.getElementById("buttonMenuClosed");
buttonMenu.addEventListener("click", startMenu);

buttonMenuOpenned = document.getElementById("buttonMenuOpenned");
buttonMenuOpenned.addEventListener("click", startMenu);

function startMenu() {
  if (document.body.clientWidth < 760) {
    if (IsOppen == true) {
      closeMenu();
    } else if (IsOppen == false) {
      openMenu();
    }
  }
}

function closeMenu() {
  console.log("fechou");
  headerMenu.style.animationName = "CloseMenu";
  IsOppen = false;

  setTimeout(() => {
    headerMenu.style.animationName = "x";
    clearTimeout();
  }, 500);
}

function openMenu() {
  console.log("abr");
  headerMenu.style.animationName = "OpenMenu";
  IsOppen = true;
}

// Adicionando Eventos para Saber quando foi clicado na ancora para fechar o menu.
anchors = document.querySelectorAll(".header-menu-lista li");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", startMenu);
}

function TypeW() {
  var nomeTextElement = document.getElementById("My-Name");
  var Content = nomeTextElement.innerHTML.split("");
  nomeTextElement.innerHTML = " ";

  setTimeout(() =>{
    Content.forEach((letter, i) => {
      setTimeout(() => {nomeTextElement.innerHTML += letter;}, 90 * i)
    });

  }, 3000);
}

TypeW()
