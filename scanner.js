let $btn = document.querySelector("#btn_scanner");
$btn.addEventListener("click", inicio);
let j = 0

function inicio() {
    let $input_cadena = document.querySelector("#input_cadena");
    let cadena = $input_cadena.value;
    console.log(cadena);
    let $token = document.querySelector("#token");
    $token.innerHTML = scanner(cadena);
}

function scanner(cadena) {
    // debugger

    let token = "";

    // Ignorar espacios en blanco
    while (cadena.charAt(j) == " ") {
        j++;
    }

    // Token actual
    let c = cadena.charAt(j);
    if (j >= cadena.length) {
        c = "$"; // fin de cadena
        return c;
    }

    // Letra ( abc || ab12 )
    if (c >= "a" && c <= "z") {
        // es una letra
        while ((c >= "a" && c <= "z") || (c >= "0" && c <= "9")) {
            token = token + c;
            j++;
            c = cadena.charAt(j);
        }
    }

    // Número
    else if (c >= "0" && c <= "9") {
        while (c >= "0" && c <= "9") {
            token = token + c;
            // '' = '' + 1 => '1'
            // '1' = '1' + 2 => '12'
            j++;
            c = cadena.charAt(j);
        }
    }

    // Operador
    else if (
        c == "," ||
        c == "(" ||
        c == ")" ||
        c == "=" ||
        c == "*" ||
        c == "/" ||
        c == "-" ||
        c == "+" ||
        c == "<" ||
        c == ">" ||
        c == ";" ||
        c == "[" ||
        c == "]"
    ) {
        token = c;
        // Para (--, ++, <= y >=)
        if (
            (c == "-" && cadena.charAt(j + 1) == "-") ||
            (c == "+" && cadena.charAt(j + 1) == "+") ||
            (c == "<" && cadena.charAt(j + 1) == "=") ||
            (c == ">" && cadena.charAt(j + 1) == "=")
        ) {
            token = token + cadena.charAt(j + 1);
            // para <=
            // '<' = '<' + '=' => '<='
            j++;
        }
        j++;
    }

    return token;
}

let $btn_clear = document.querySelector("#clear_scanner")
$btn_clear.addEventListener("click", ()=>{
    j = 0
    let $token = document.querySelector("#token");
    $token.innerHTML = "*Aqui se mostraran los token*";

    let $input_cadena = document.querySelector("#input_cadena");
    $input_cadena.value = ""

}) //funcion flecha

// $btn_clear.addEventListener("click", limpiar)
// function limpiar(){
//     j=0
// }
