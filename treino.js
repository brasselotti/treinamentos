function palindromo() {
    let textoInserido = document.getElementById('text-palindromo').value;
    let minuscula = textoInserido.toLowerCase()
    let textoSeparado = minuscula.split("");
    let textoInvertido = textoSeparado.reverse();
    textoInvertido = textoInvertido.join("");

    document.getElementById('text-palindromo').value = ' ';

    if (textoInvertido == minuscula){
        alert("A palavra " + textoInserido + " é um palíndromo")
    } else {
        alert("A palavra '" + textoInserido + "' não é um palíndromo")
    }
}

