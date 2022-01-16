import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../components/Botao";
import TextField from "../../../components/TextField";
import validacoesGenericas from "../../../contexts/validacoesGenericas";
import useErro from "../../../hooks/useErro";


const DadosCliente = ({estilos, cliente, envio, voltar}) => {
    const caixaLogin = estilos[0];
    const titulo = estilos[1];
    const labels = estilos[2];
    const caixaBotao = estilos[3];
    const estiloBotao = [estilos[4], estilos[5]];
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");

    const validacoes = useContext(validacoesGenericas);

    const [erro, validarCampo, possoEnviar] = useErro(validacoes);

    function enviar(dados){
        if(possoEnviar()){
            envio(dados);
        }
    }

    return(
        <>
            <View style={caixaLogin}>
                <Text style={titulo}>{cliente.dados}</Text>
                <TextField 
                estiloLabel={labels} 
                label={cliente.labelNome} 
                placeholder={cliente.labelNome}
                onChangeText={text => setNome(text)}
                onBlur={() => {
                    validarCampo('nome', nome)
                }}
                error={erro.nome}
                value={nome}
                />
                <TextField 
                estiloLabel={labels} 
                label={cliente.labelSobrenome} 
                placeholder={cliente.labelSobrenome}
                onChangeText={text => setSobrenome(text)}
                onBlur={() => {
                    validarCampo('sobrenome', sobrenome)
                }}
                error={erro.sobrenome}
                value={sobrenome}
                />
                <TextField 
                estiloLabel={labels} 
                label={cliente.labelCPF} 
                placeholder={cliente.labelCPF}
                onChangeText={text => setCPF(text)}
                onBlur={() => {
                    validarCampo('cpf', cpf)
                }}
                error={erro.cpf}
                value={cpf}
                />
            </View>
            <View style={caixaBotao}>
                <Botao style={estiloBotao} evento={voltar} >{cliente.botaoVoltar}</Botao>
                <Botao style={estiloBotao} evento={() => {enviar({nome, sobrenome, cpf})}} >{cliente.botaoProximo}</Botao>
            </View>
        </>
    );
}

export default DadosCliente;