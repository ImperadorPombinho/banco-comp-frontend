import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../components/Botao";
import TextField from "../../../components/TextField";
import validacoesGenericas from "../../../contexts/validacoesGenericas";
import useErro from "../../../hooks/useErro";



const DadosLocal = ({estilos, local, envio, volta, json, soGuardar}) => {
    const caixaLogin = estilos[0];
    const titulo = estilos[1];
    const labels = estilos[2];
    const caixaBotao = estilos[3];
    const estiloBotao = [estilos[4], estilos[5]];

    const [cidade, setCidade] = useState(json.cidade);
    const [estado, setEstado] = useState(json.estado);
    const [idade, setIdade] = useState(json.idade);

    const validacoes = useContext(validacoesGenericas);

    const [erro, validarCampo, possoEnviar] = useErro(validacoes);

    function enviar(dados){
        if(possoEnviar()){
            envio(dados);
        }
    }
    function voltar(dados){
        if(possoEnviar()){
            soGuardar(dados);
            volta()
        }
    }

    return(
        <>
            <View style={caixaLogin}>
                <Text style={titulo} >{local.dados}</Text>
                <TextField  
                estiloLabel={labels} 
                label={local.labelCidade}
                onChangeText={text => setCidade(text)}
                onBlur={() => {
                    validarCampo('cidade', cidade)
                }}
                error={erro.cidade}
                value={cidade}
                />
                <TextField  



                estiloLabel={labels} 
                label={local.labelEstado}
                onChangeText={text => setEstado(text)}
                onBlur={() => {
                    validarCampo('estado', estado)
                }}
                error={erro.estado}
                value={estado}
                />
                <TextField  
                estiloLabel={labels} 
                label={local.labelIdade}
                onChangeText={text => setIdade(text)}
                onBlur={() => {
                    validarCampo('idade', idade)
                }}
                error={erro.idade}
                value={idade}
                />
            </View>
            <View style={caixaBotao}>
                <Botao style={estiloBotao} 
                evento={() => {
                    voltar({cidade, estado, idade})
                }} > 
                    {local.botaoVoltar} 
                </Botao>
                <Botao style={estiloBotao} 
                evento={() => {
                    enviar({cidade, estado, idade})
                }} > 
                    {local.botaoCadastrar} 
                </Botao>
            </View>
        </>
    );

}

export default DadosLocal;