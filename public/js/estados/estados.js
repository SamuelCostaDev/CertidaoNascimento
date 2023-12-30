$(document).ready(function () {
    let urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
    let urlMunicipiosBase = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios';
    // Carrega os estados no carregamento da página
    $.getJSON(urlEstados, function (data) {
        let selectEstados = $('#estados');

        $.each(data, function (index, estado) {
            // Cria uma opção para cada estado
            let option = $('<option>', {
                value: estado.sigla,  // Use a sigla do estado como valor
                text: estado.nome
            });

            // Adiciona a opção ao elemento select
            selectEstados.append(option);
        });
    });


    // Adiciona um ouvinte de eventos para o elemento select de estados
    $('#estados').on('change', function () {
        let ufSelecionada = $(this).val();

        // Verifica se um estado foi selecionado
        if (ufSelecionada) {
            // Monta a URL para obter os municípios do estado selecionado
            let urlMunicipios = urlMunicipiosBase.replace('{UF}', ufSelecionada);

            // Faz a requisição para obter os municípios
            $.getJSON(urlMunicipios, function (municipios) {
                let selectMunicipios = $('#municipios');

                // Limpa as opções anteriores
                selectMunicipios.empty();

                // Adiciona uma opção em branco
                selectMunicipios.append($('<option>', {
                    value: '',
                    text: 'Selecione uma opção'
                }));

                // Adiciona as opções de municípios
                $.each(municipios, function (index, municipio) {
                    let option = $('<option>', {
                        value: municipio.nome,
                        text: municipio.nome
                    });
                    selectMunicipios.append(option);
                });
            });
        }
    });

    // Estado e Cidade Criança
    $.getJSON(urlEstados, function (data) {
        let estadosCrianca = $('#estadosCrianca');

        $.each(data, function (index, estado) {
            // Cria uma opção para cada estado
            let option = $('<option>', {
                value: estado.sigla,  // Use a sigla do estado como valor
                text: estado.nome
            });

            // Adiciona a opção ao elemento select
            estadosCrianca.append(option);
        });
    });

    $('#estadosCrianca').on('change', function () {
        let ufSelecionada = $(this).val();

        // Verifica se um estado foi selecionado
        if (ufSelecionada) {
            // Monta a URL para obter os municípios do estado selecionado
            let urlMunicipios = urlMunicipiosBase.replace('{UF}', ufSelecionada);

            // Faz a requisição para obter os municípios
            $.getJSON(urlMunicipios, function (municipios) {
                let MunicipiosCrianca = $('#municipioCrianca');

                // Limpa as opções anteriores
                MunicipiosCrianca.empty();

                // Adiciona uma opção em branco
                MunicipiosCrianca.append($('<option>', {
                    value: '',
                    text: 'Selecione uma opção'
                }));

                // Adiciona as opções de municípios
                $.each(municipios, function (index, municipio) {
                    let option = $('<option>', {
                        value: municipio.nome,
                        text: municipio.nome
                    });
                    MunicipiosCrianca.append(option);
                });
            });
        }
    });

    // Estados e Cidade Testemunha
    $.getJSON(urlEstados, function (data) {
        let EstadosT = $('#estadosT');

        $.each(data, function (index, estado) {
            // Cria uma opção para cada estado
            let option = $('<option>', {
                value: estado.sigla,  // Use a sigla do estado como valor
                text: estado.nome
            });

            // Adiciona a opção ao elemento select
            EstadosT.append(option);
        });
    });

    $('#estadosT').on('change', function () {
        let ufSelecionada = $(this).val();

        // Verifica se um estado foi selecionado
        if (ufSelecionada) {
            // Monta a URL para obter os municípios do estado selecionado
            let urlMunicipios = urlMunicipiosBase.replace('{UF}', ufSelecionada);

            // Faz a requisição para obter os municípios
            $.getJSON(urlMunicipios, function (municipios) {
                let MunicipiosT = $('#municipioT');

                // Limpa as opções anteriores
                MunicipiosT.empty();

                // Adiciona uma opção em branco
                MunicipiosT.append($('<option>', {
                    value: '',
                    text: 'Selecione uma opção'
                }));

                // Adiciona as opções de municípios
                $.each(municipios, function (index, municipio) {
                    let option = $('<option>', {
                        value: municipio.nome,
                        text: municipio.nome
                    });
                    MunicipiosT.append(option);
                });
            });
        }
    });
});
