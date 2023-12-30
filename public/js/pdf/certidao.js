// Função para obter o valor do localStorage
function obterValorLocalStorage(chave) {
    return localStorage.getItem(chave);
}

// Função para atualizar elementos com uma classe específica
function atualizarElementos(classe, valor) {
    document.querySelectorAll(classe).forEach(function (element) {
        element.textContent = valor;
    });
}

// Inputs Cartórios
var nomeCartorio = obterValorLocalStorage("nomeCartorio");
var estados = obterValorLocalStorage("estados");
var municipios = obterValorLocalStorage("municipios");
var rua = obterValorLocalStorage("rua");
var numero = obterValorLocalStorage("numero");
var bairro = obterValorLocalStorage("bairro");
var oficialCartorio = obterValorLocalStorage("oficialCartorio");
var tabelia = obterValorLocalStorage("tabelia");
var dataDocumento = obterValorLocalStorage("dataDocumento");


// Inputs Criança
var nomeCrianca = obterValorLocalStorage("nomeCrianca");
var nomeMae = obterValorLocalStorage("nomeMae");
var nomePai = obterValorLocalStorage("nomePai");
var estadosCrianca = obterValorLocalStorage("estadosCrianca");
var municipioCrianca = obterValorLocalStorage("municipioCrianca");
var dataNascimento = obterValorLocalStorage("dataNascimento");
var horaNascimento = obterValorLocalStorage("horaNascimento");
var sexo = obterValorLocalStorage("sexo");

// Inputs Avós
var NomeAvoHP = obterValorLocalStorage("NomeAvoHP");
var NomeAvoMP = obterValorLocalStorage("NomeAvoMP");
var NomeAvoHM = obterValorLocalStorage("NomeAvoHM");
var NomeAvoMM = obterValorLocalStorage("NomeAvoMM");

// Inputs Testemunhas
var testemunha1 = obterValorLocalStorage("testemunha1");
var testemunha2 = obterValorLocalStorage("testemunha2");
var estadosT = obterValorLocalStorage("estadosT");
var municipioT = obterValorLocalStorage("municipioT");
var elementosTestemunha = obterValorLocalStorage("elementosTestemunha");

if (elementosTestemunha === 'nao') {
    // Atribuir 'hidden' à div com a classe 'testemunhas'
    document.querySelector('.testemunhas').setAttribute('hidden', true);
} else {
    // Se testemunha for 'Sim' ou qualquer outro valor, remover o 'hidden'
    document.querySelector('.testemunhas').removeAttribute('hidden');
}

// Elementos Cartórios
atualizarElementos(".nomeCartorio", nomeCartorio);
atualizarElementos(".estados", estados);
atualizarElementos(".municipios", municipios);
atualizarElementos(".rua", rua);
atualizarElementos(".numero", numero);
atualizarElementos(".bairro", bairro);
atualizarElementos(".oficialCartorio", oficialCartorio);
atualizarElementos(".tabelia", tabelia);

// Elementos Criança
atualizarElementos(".nomeCrianca", nomeCrianca);
atualizarElementos(".nomeMae", nomeMae);
atualizarElementos(".nomePai", nomePai);
atualizarElementos(".estadosCrianca", estadosCrianca);
atualizarElementos(".municipioCrianca", municipioCrianca);
atualizarElementos(".horaNascimento", horaNascimento);
atualizarElementos(".sexo", sexo);

if (nomePai === '') {
    document.getElementById('SemPai').removeAttribute('hidden');
} else {
    document.getElementById('ComPai').removeAttribute('hidden');
    
}

// Elementos Avós
switch (true) {
    case NomeAvoHP === '':
        document.getElementById('SemNomeAvoHP').removeAttribute('hidden');
        break;
    case NomeAvoHM === '':
        document.getElementById('SemNomeAvoHM').removeAttribute('hidden');
        break;
    case NomeAvoHP === '' && NomeAvoHM === '':
        document.getElementById('SemNomeAvoH').removeAttribute('hidden');
        break;
    default:
        document.getElementById('ComNomeAvos').removeAttribute('hidden');
}

atualizarElementos(".NomeAvoHP", NomeAvoHP);
atualizarElementos(".NomeAvoMP", NomeAvoMP);
atualizarElementos(".NomeAvoHM", NomeAvoHM);
atualizarElementos(".NomeAvoMM", NomeAvoMM);

// Elementos Testemunhas
atualizarElementos(".testemunha1", testemunha1);
atualizarElementos(".testemunha2", testemunha2);
atualizarElementos(".estadosT", estadosT);
atualizarElementos(".municipioT", municipioT);
atualizarElementos(".elementosTestemunha", elementosTestemunha);



function obterNomeMesPorExtenso(numeroMes) {
    var meses = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro",
        "Outubro", "Novembro", "Dezembro"
    ];

    // Verifica se o número do mês está dentro do intervalo válido
    if (numeroMes >= 1 && numeroMes <= 12) {
        return meses[numeroMes - 1];
    } else {
        // Retorna uma string vazia ou outra mensagem de erro, conforme necessário
        return "";
    }
}

function formatarData(dataString, classeDia, classeMes, classeAno, classeDataCompleta) {
    var data = new Date(dataString);
    
    var dia = data.getDate() + 1;
    var mes = data.getMonth() + 1;
    var nomeMes = obterNomeMesPorExtenso(mes);
    var ano = data.getFullYear();

    var dataCompleta = dia + "/" + mes + "/" + ano;

    // Atualizar elementos com as classes correspondentes
    atualizarElementos(classeDia, dia);
    atualizarElementos(classeMes, nomeMes);
    atualizarElementos(classeAno, ano);
    atualizarElementos(classeDataCompleta, dataCompleta);
}

// Exemplo de uso para a data de nascimento
formatarData(dataNascimento, ".diaNascimento", ".mesNascimento", ".anoNascimento", ".dataCompletaNascimento");

// Exemplo de uso para a data do documento
formatarData(dataDocumento, ".diaDocumento", ".mesDocumento", ".anoDocumento", ".dataCompletaDocumento");
