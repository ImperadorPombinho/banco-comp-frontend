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
    confirmar: semValidacao
})
