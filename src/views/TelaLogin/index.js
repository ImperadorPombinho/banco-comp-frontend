import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView, ScrollView } from "react-native";
import LogoApp from "../../../assets/images/logoAppBanco.png";
import { Platform } from "react-native";
import Botao from "../../components/Botao";
import TextField from "../../components/TextField";
import validacoesGenericas from "../../contexts/validacoesGenericas";
import useErro from "../../hooks/useErro";



const TelaLogin = ({route, navigation}) => {
    const {inputs, estiloTelaToda} = route.params;
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validacoes = useContext(validacoesGenericas);

    const [erro, validarCampo, possoEnviar] = useErro(validacoes);


    function aoEnviar(){
        if(possoEnviar()){
            const codigoHTTP = 200;
            if(codigoHTTP === 200){
                navigation.navigate('Funcoes')
            }
        }
        
    }

    return(
        <View style={estiloTelaToda}>
        
        <Image style={estilos.imagem} source={LogoApp} />
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

                <ScrollView>
                    <View style={estilos.configCaixaLogin}>       
                        <View style={estilos.caixaLogin}>
                            <TextField 
                            label={inputs.labelEmail}
                            onChangeText={text => setEmail(text)}
                            onBlur={() => {
                                validarCampo('email', email)
                            }}
                            error={erro.email}
                            estiloLabel={estilos.textoLabel}
                            placeholder={inputs.labelEmail}
                            
                            />
                            <TextField
                            secureTextEntry
                            onChangeText={text => setSenha(text)}
                            onBlur={() => {
                                validarCampo('senha', senha)
                            }}
                            error={erro.senha}
                            label={inputs.labelSenha}
                            estiloLabel={estilos.textoLabel}
                            placeholder={inputs.labelSenha}
                            
                            />
                        </View>
                    </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={estilos.caixaBotao}>
                <Botao style={[estilos.botao, estilos.textoBotao]} evento={aoEnviar} >{inputs.labelBotao}</Botao>
            </View>
            
        </View>
    );
}

const estilos = StyleSheet.create({
    imagem: {
        width: 400,
        height: 320,
        position: 'relative'
    },
    configCaixaLogin: {
        height: 400,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    caixaLogin: {
        backgroundColor: "#E6E6E6", 
        borderRadius: 30,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 350,
        width: 360
        
    },
    textoLabel: {
        fontSize: 16,
        lineHeight: 18,
        paddingLeft: 15,
        marginBottom: 10,
        color: "#414141",
        fontFamily: "RobotoRegular",
        textAlign: 'left'
    },
    inputConfig: {
        width: 300, 
        backgroundColor: "#A6C2AB",

    },
    textoEsqueceu: {
        fontSize: 20,
        paddingLeft: 24,
        color: "#414141",
        fontFamily: "RobotoRegular",
        textAlign: 'left'
    },
    caixaBotao: {
        width: "100%",
        height: "15.5%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        borderRadius: 24,
        backgroundColor: "#E6E6E6",
        height: 50,
        width: 150
    },
    textoBotao: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 20,
        fontFamily: "RobotoRegular",
        marginTop: 14
    }
});
export default TelaLogin;