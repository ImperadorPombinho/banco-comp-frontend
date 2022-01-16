

function validarEmail(email){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    };
    const arroba = email.indexOf("@");
    const pontoCom = email.indexOf(".com");

    if(arroba == -1 || pontoCom == -1){
        objResposta.valido = false;
        objResposta.textoAjuda = "Email precisa ter @ e .com";
    }
    return objResposta
}


function validarSenha(senha){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    };
    if(senha.length < 4){
        objResposta.valido = false;
        objResposta.textoAjuda = "Senha tem quer no minimo 4 digitos";
    }
    if(senha.length > 72){
        objResposta.valido = false;
        objResposta.textoAjuda = "Senha tem quer no maximo 72 digitos";
    }
    return objResposta;


}

function validarConfirmarSenha(confirmacaoSenha, senha){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    };
    if(confirmacaoSenha == undefined){
        objResposta.valido = false
        objResposta.textoAjuda = "Confirmar Senha é obrigado"
        return objResposta;
    }
    if(senha.toUpperCase() !== confirmacaoSenha.toUpperCase()){
        objResposta.valido = false;
        objResposta.textoAjuda = "Confirmação nao é igual a senha";
    }
    return objResposta;

}
function EhTudoIgual(cpf){
    const digitoAux = cpf[0];
    let contador = 1
    for(let i = 1; i < cpf.length; i++){
        if(digitoAux === cpf[i]){
            contador++;
        }
    }
    if(contador == cpf.length - 1){
        return true
    }else{
        return false
    }

    //retornar um boolean

}

function acharPrimeiroDigitoCPF(cpfRepartido){
    let soma = 0
    let indice = 0;
    for(let i = 10; i >=2; i--){
        
        indice = (i - 10) * -1;
        

        soma = soma + (parseInt(cpfRepartido[indice]) * i);
    }
    
    let primeiroDigitoAux = 0;
    if(soma % 11 >= 2){
        const resultadoResto = soma % 11;
        primeiroDigitoAux = 11 - resultadoResto;
    }else{
        primeiroDigitoAux = 0;
    }
    return primeiroDigitoAux.toString();

    //retornar primeiro digito verificador cpf

}
function acharSegundoDigitoCPF(cpfRepartidoComPrimeiroDigito){
    
    let soma = 0;
    let indice = 0;
    for(let i = 11; i >= 2; i--){
        
        indice = (i - 11) * -1;
        
        soma = soma + (parseInt(cpfRepartidoComPrimeiroDigito[indice]) * i);
    }
    let segundoDigitoAux = 0;
    if(soma % 11 >= 2){
        const resultadoResto = soma % 11;
        segundoDigitoAux = 11 - resultadoResto;

    }else{
        segundoDigitoAux = 0;
    }
    return segundoDigitoAux.toString();


}

function validarCpf(cpf){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    };
    if(cpf.length > 11 || cpf.length < 11){
        objResposta.valido = false;
        objResposta.textoAjuda = `Cpf tem quer 11 digitos, esse tem ${cpf.length} digitos`;
        return objResposta;
    }
    if(EhTudoIgual(cpf)){
        objResposta.valido = false;
        objResposta.textoAjuda = "todos os digitos do cpf estao iguais";
        return objResposta;
    }
    const primeiroDigito = cpf[cpf.length - 2];
    const segundoDigito = cpf[cpf.length - 1];
    const cpfRepartidoPrimeiroDigito = cpf.slice(0, cpf.length - 2);
    const cpfRepartidoSegundoDigito = cpf.slice(0, cpf.length - 1);
    
    const primeiroDigitoAux = acharPrimeiroDigitoCPF(cpfRepartidoPrimeiroDigito);
    const segundoDigitoAux = acharSegundoDigitoCPF(cpfRepartidoSegundoDigito);

    if(primeiroDigito !== primeiroDigitoAux || segundoDigitoAux !== segundoDigito){
        objResposta.valido = false;
        objResposta.textoAjuda = "Cpf não é valido";
        
    }

    return objResposta;



}
function validarNome(nome){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    }

    if(nome.length === 0){
        objResposta.valido = false;
        objResposta.textoAjuda = "Esse campo precisa ter algo"
    }
    return objResposta
}

function validarSobreNome(sobrenome){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    }

    if(sobrenome.length === 0){
        objResposta.valido = false;
        objResposta.textoAjuda = "Esse campo precisa ter algo"
    }
    return objResposta
}

function validarEstado(estado){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    }

    if(estado.length === 0){
        objResposta.valido = false;
        objResposta.textoAjuda = "Esse campo precisa ter algo"
    }
    return objResposta
}

function validarCidade(cidade){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    }

    if(cidade.length === 0){
        objResposta.valido = false;
        objResposta.textoAjuda = "Esse campo precisa ter algo"
    }
    return objResposta
}

function validarIdade(idade){
    const objResposta = {
        valido: true,
        textoAjuda: ""
    }

    if(idade < 18){
        objResposta.valido = false;
        objResposta.textoAjuda = "Voce precisa ser maior de idade"
    }
    return objResposta
}


export {validarEmail, validarSenha, validarConfirmarSenha, validarCpf, validarCidade, validarEstado, validarIdade, validarNome, validarSobreNome}