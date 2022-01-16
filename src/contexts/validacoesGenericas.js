import React from "react";

function semValidacao(){
    return {
        valido: true,
        textoAjuda: ""
    }
}


const validacoesGenericas = React.createContext({
    email: semValidacao,
    cpf: semValidacao,
    senha: semValidacao,
    confirmar: semValidacao,
    nome: semValidacao,
    sobrenome: semValidacao,
    idade: semValidacao,
    cidade: semValidacao,
    estado: semValidacao
})


export default validacoesGenericas;