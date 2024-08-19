const input = document.querySelector(".input");
const retangulo = document.querySelector(".retangulo");

function botaoCriptografar() {

    const textoCriptografado = criptografar(input.value);

    retangulo.innerHTML = textoCriptografado;

    input.innerHTML = "";
}

function botaoDescriptografar() {

    const textoDescriptografado = descriptografar(input.value);

    retangulo.innerHTML = textoDescriptografado;

    input.innerHTML = "";
}

function criptografar(textoCriptografado) {

    let matriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    textoCriptografado = textoCriptografado.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {

        if (textoCriptografado.includes(matriz[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }

    return textoCriptografado;
}

function descriptografar(textoDescriptografado) {

    let matriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    textoDescriptografado = textoDescriptografado.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {

        if (textoDescriptografado.includes(matriz[i][1])) {
            textoDescriptografado = textoDescriptografado.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return textoDescriptografado;
}
