function calculoIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var resultado = peso / (altura * altura);
    var text;
    var gif;
    var cssclass;

    if (resultado < 18) {
        text = "Está linda!"
        gif = `<img src="https://media.giphy.com/media/TidHfACqQif3q/giphy.gif" alt="Gif Ines Brasil">`;
        cssclass = "linha1";
    }

    else if (resultado >= 18 && resultado < 25) {
        text = "Maravilhosaaa!"
        gif = `<img src="https://media.giphy.com/media/BKJQM9IIpmrrG/giphy.gif" alt="Gif Nazaré">`;
        cssclass = "linha2";
    }

    else if (resultado >= 25 && resultado < 30) {
        text = "Que maravigod!"
        gif = `<img src="https://media.giphy.com/media/pMvCt5OY2i4IU/giphy.gif" alt="Gif Maisa">`;
        cssclass = "linha3";
    }
   
    else if (resultado >= 30 && resultado < 40) {
        text = "Diva sem defeitos!"
        gif = `<img src="https://media.giphy.com/media/FYqf889lXd9Ru/giphy.gif" alt="Gif carreta furacao">`;
        cssclass = "linha4";
    }
    else {
        text = "Ai meu coração!"
        gif = `<img src="https://media.giphy.com/media/l1J9Rwvo00MRAgWVG/giphy.gif" alt="Gif Joelma">`;
        cssclass = "linha5";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}

