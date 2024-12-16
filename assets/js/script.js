// script.js
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});

const projetos = document.querySelector('.projetos');
let offset = 0;

document.getElementById('next').addEventListener('click', () => {
  offset -= 300;
  projetos.style.transform = `translateX(${offset}px)`;
});

document.getElementById('prev').addEventListener('click', () => {
  offset += 300;
  projetos.style.transform = `translateX(${offset}px)`;
});

document.getElementById('toggle-theme').addEventListener('click', function () {
  // Alterna a classe 'dark-mode' no elemento <body>
  document.body.classList.toggle('dark-mode');

  // Altera o texto do botão para indicar o estado atual
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = '☀️ Modo Claro';
  } else {
    this.textContent = '🌙 Modo Escuro';
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset(); // Limpa os campos
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

const texto = "Bem-vindo ao meu portfólio!";
let i = 0;

function digitar() {
  if (i < texto.length) {
    document.querySelector("#home h2").textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 100);
  }
}

digitar();
