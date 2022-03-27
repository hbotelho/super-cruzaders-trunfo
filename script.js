var cartas1 = {
  nome: "Star Platinum",
  imagem:
    "https://pm1.narvii.com/6708/927f38b6d91eff17ff0a9d664b0268a4ba9f8b6f_hq.jpg",
  atributos: {
    ataque: 10,
    defesa: 9,
    magia: 8
  }
};

var cartas2 = {
  nome: "Silver Chariot",
  imagem:
    "http://pm1.narvii.com/8157/48deb74c326455370f73a66c6263621c85c57156r1-400-436v2_00.jpg",
  atributos: {
    ataque: 7,
    defesa: 5,
    magia: 4
  }
};

var cartas3 = {
  nome: "Hermit Purple",
  imagem:
    "http://pm1.narvii.com/7221/4ffcdd40f4ec0f14c6cbfaefb8f7a087d718a085r1-732-412v2_uhq.jpg",
  atributos: {
    ataque: 3,
    defesa: 4,
    magia: 8
  }
};

var cartas = [cartas1, cartas2, cartas3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  //console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //exibirOpcoes();
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoesTexto = "";

//   for (var atributo in cartaJogador.atributos) {
//     opcoesTexto +=
//       "<input type='radio' name='atributo' value=" +
//       atributo +
//       ">" +
//       atributo +
//       " ";
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  console.log(atributoSelecionado);
  if (atributoSelecionado == undefined) {
    alert("ESCOLHA UM ATRIBUTO!!!");
  } else {
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado = "<p class='resultado-final'>Você venceu</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
      htmlResultado = "<p class='resultado-final'>Você perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>EMPATOU</p>";
    }
    elementoResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    //console.log(cartaMaquina);
    //console.log(atributoSelecionado);
    //console.log(cartaJogador.atributos[atributoSelecionado]);
  }
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //essa sintaxe é própria do CSS
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; //essa sintaxe é própria do CSS
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value=" +
      atributo +
      ">" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}