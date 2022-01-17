import React, { useState } from "react";



function useErro(validacoes){
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erro, setErro] = useState(estadoInicial);
    const [senhaGravada, setSenhaGravada] = useState("");

    function validarCampo(name, value){
        
        if(name === "senha"){
            setSenhaGravada(value);
        }
        const novoEstado = {...erro};

        if(name === "confirmar"){
            novoEstado[name] = validacoes[name](value, senhaGravada);
        }else{
            novoEstado[name] = validacoes[name](value);
        }

        setErro(novoEstado)


    }

    function possoEnviar(){
        for(let campo in erro){
            if(!erro[campo].valido){
                return false;
            }
        }
        return true;
    }


    return [erro, validarCampo, possoEnviar]


}


function criarEstadoInicial(validacoes){
    const estadoInicial = {};
    const objAux = {
        valido: true,
        textoAjuda: ""
    };
    for(let campo in validacoes){
        estadoInicial[campo] = objAux;
    }
    return estadoInicial;
}

export default useErro;