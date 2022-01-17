import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import Botao from "../../../components/Botao";
import TextField from "../../../components/TextField";
import validacoesGenericas from "../../../contexts/validacoesGenericas";
import useErro from "../../../hooks/useErro";



const DadosConta = ({estilos, conta, envio, json}) => {
    const caixaLogin = estilos[0];
    const titulo = estilos[1];
    const labels = estilos[2];
    const caixaBotao = estilos[3];
    const estiloBotao = [estilos[4], estilos[5]];
    const [email, setEmail] = useState(json.email);
    const [senha, setSenha] = useState(json.senha);
    const [confirmarSenha, setConfirmarSenha] = useState(json.confirmarSenha);

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
                    <Text style={titulo}>{conta.dados}</Text>
                    <TextField
                    estiloLabel={labels}  
                    onChangeText={text => setEmail(text)}
                    onBlur={() => {
                        validarCampo('email', email)
                    }}
                    error={erro.email}
                    placeholder={conta.labelEmail} 
                    label={conta.labelEmail}
                    value={email}
                    
                    />
                    <TextField 
                    estiloLabel={labels}  
                    onChangeText={text => setSenha(text)}
                    onBlur={() => {
                        validarCampo('senha', senha)
                    }}
                    error={erro.senha}
                    placeholder={conta.labelSenha} 
                    label={conta.labelSenha}
                    value={senha}
                    
                    />
                    <TextField 
                    estiloLabel={labels}  
                    onChangeText={text => setConfirmarSenha(text)}
                    onBlur={() => {
                        validarCampo('confirmar', confirmarSenha)
                    }}
                    error={erro.confirmar}
                    placeholder={conta.labelConfirmar} 
                    label={conta.labelConfirmar}
                    value={confirmarSenha}
                    />
                </View>

                <View style={caixaBotao} >
                    <Botao style={estiloBotao} evento={() => {enviar({email, senha, confirmarSenha})}}>{conta.botaoProximo}</Botao>
                </View>
            
        </>
    );
}


export default DadosConta;