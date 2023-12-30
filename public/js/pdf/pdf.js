function salvarEEnviar() {
  // Obter o valor do input
  var estados = document.getElementById("estados").value;
  var municipios = document.getElementById("municipios").value;
  var rua = document.getElementById("rua").value;
  var numeroInput = document.getElementById("numero");

  // Verificar se o campo está desabilitado antes de obter o valor
  var numero = numeroInput.disabled ? "sem número" : numeroInput.value;
  var bairro = document.getElementById("bairro").value;
  var nomeCartorio = document.getElementById("nomeCartorio").value;
  var oficialCartorio = document.getElementById("oficialCartorio").value;
  var tabelia = document.getElementById("tabelia").value;
  var dataDocumento = document.getElementById("dataDocumento").value;
  var dataNascimento = document.getElementById("dataNascimento").value;
  var horaNascimento = document.getElementById("horaNascimento").value;
  var sexo = document.getElementById("sexo").value;
  var nomeCrianca = document.getElementById("nomeCrianca").value;
  var nomeMae = document.getElementById("nomeMae").value;
  var nomePai = document.getElementById("nomePai").value;
  var NomeAvoHP = document.getElementById("NomeAvoHP").value;
  var NomeAvoMP = document.getElementById("NomeAvoMP").value;
  var NomeAvoHM = document.getElementById("NomeAvoHM").value;
  var NomeAvoMM = document.getElementById("NomeAvoMM").value;
  var testemunha1 = document.getElementById("testemunha1").value;
  var testemunha2 = document.getElementById("testemunha2").value;
  var municipioT = document.getElementById("testemunha2").value;
  var estadosT = document.getElementById("estadosT").value;
  var elementosTestemunha = document.querySelector('input[name="teveTestemunha"]:checked');
  var valorSelecionado = elementosTestemunha ? elementosTestemunha.value : '';

  // // Armazenar o valor em localStorage
  localStorage.setItem("estados", estados);
  localStorage.setItem("elementosTestemunha", valorSelecionado);
  localStorage.setItem("municipios", municipios);
  localStorage.setItem("rua", rua);
  localStorage.setItem("numero", numero);
  localStorage.setItem("bairro", bairro);
  localStorage.setItem("nomeCartorio", nomeCartorio);
  localStorage.setItem("oficialCartorio", oficialCartorio);
  localStorage.setItem("tabelia", tabelia);
  localStorage.setItem("dataDocumento", dataDocumento);
  localStorage.setItem("dataNascimento", dataNascimento);
  localStorage.setItem("horaNascimento", horaNascimento);
  localStorage.setItem("sexo", sexo);
  localStorage.setItem("nomeCrianca", nomeCrianca);
  localStorage.setItem("nomeMae", nomeMae);
  localStorage.setItem("nomePai", nomePai);
  localStorage.setItem("NomeAvoHP", NomeAvoHP);
  localStorage.setItem("NomeAvoMP", NomeAvoMP);
  localStorage.setItem("NomeAvoHM", NomeAvoHM);
  localStorage.setItem("NomeAvoMM", NomeAvoMM);
  localStorage.setItem("testemunha1", testemunha1);
  localStorage.setItem("testemunha2", testemunha2);
  localStorage.setItem("municipioT", municipioT);
  localStorage.setItem("estadosT", estadosT);
  localStorage.setItem("elementosTestemunha", valorSelecionado);

  // Redirecionar para a próxima página
  window.location.href = "certidao.html";
}