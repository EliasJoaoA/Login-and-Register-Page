const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

let contador = 0;

function criarElementoNaTela() {
  contador++;

  const novoElemento = document.createElement("p");
  novoElemento.textContent = `x = ${contador}`;

  document.body.appendChild(novoElemento);
}
const entrarButton = document.querySelector(".form-container.sign-in button");
entrarButton.addEventListener("click", () => {
  criarElementoNaTela();
});
