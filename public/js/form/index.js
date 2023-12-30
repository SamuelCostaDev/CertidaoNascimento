function sn() {
    let semNumeroCheckbox = document.getElementById("semNumero");
    let numeroInput = document.getElementById("numero");

    if (semNumeroCheckbox.checked) {
        numeroInput.setAttribute("disabled", true);
    } else {
        numeroInput.removeAttribute("disabled");
    }
}

function mostrarTestemunhas() {
    document.getElementById("testemunhas").removeAttribute('hidden');
}

function ocultarTestemunhas() {
    document.getElementById("testemunhas").setAttribute('hidden', true);
}
