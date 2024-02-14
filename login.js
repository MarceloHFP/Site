function cadastro() {

    let nomeC = document.getElementById("cadastroNome");
    let emailC = document.getElementById("cadastroEmail");
    let senhaC = document.getElementById("cadastroSenha");
    let CPFC = document.getElementById("cadastroCPF");
    let timeC = document.getElementById("cadastroTime");

    let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

    if(dados == null) {
        localStorage.setItem("dadosCadastro", "[]");
        dados = [];
    }

    let auxCads = {
        nome: nomeC.value,
        email: emailC.value,
        senha: senhaC.value,
        CPF: CPFC.value,
        time: timeC.value
    }

    dados.push(auxCads);

    localStorage.setItem("dadosCadastro", JSON.stringify(dados));
}

function login() {
    let senhaL = document.getElementById("loginSenha");
    let emailL = document.getElementById("loginEmail");

    if(localStorage.getItem("dadosCadastro") == null) {
        alert("Você não se cadastrou ainda");
        return;
    }

    let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

    let usuarioEncontrado = dados.find(function(usuario) {
        return usuario.email === emailL.value && usuario.senha === senhaL.value;
    });

    if (usuarioEncontrado) {
        console.log(usuarioEncontrado);
        alert("Login bem-sucedido. Bem-vindo, " + usuarioEncontrado.nome + "!");
    } else {
        console.log(usuarioEncontrado);
        alert("Credenciais inválidas. Por favor, verifique seu e-mail e senha.");
    }
}
