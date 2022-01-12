import React, { useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView, ScrollView } from "react-native";
import LogoApp from "../../../assets/images/logoAppBanco.png";
import { Platform } from "react-native";
import Botao from "../../components/Botao";
import { useForm } from "react-hook-form";
import TextField from "../../components/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const validacaoLoginSchema = yup.object().shape({
    email: yup
    .string()
    .required('Email é obrigátorio')
    .email('Email tem que ser valido'),
    senha: yup
    .string()
    .required('senha é obrigatoria')
    .min(6, 'senha tem que ter no minimo 6 digitos')
    .max(72, 'senha tem que ter no maximo 72 digitos')
})
const TelaLogin = ({route, navigation}) => {
    const {register, setValue, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validacaoLoginSchema)});
    const {inputs, estiloTelaToda} = route.params;

    useEffect(() => {
        register('email')
        register('senha')
    }, [register]);


    function aoEnviar(data){
        console.log(data.email);
        console.log(data.senha);
        const codigoHTTP = 200;
        if(codigoHTTP === 200){
            navigation.navigate('Conta');
        }
    }

    return(
        <View style={estiloTelaToda}>
        
        <Image style={estilos.imagem} source={LogoApp} />
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
                <ScrollView>
                    <View style={estilos.configCaixaLogin}>       
                        <View style={estilos.caixaLogin}>
                            <TextField 
                            label={inputs.labelEmail}
                            error={errors?.email}
                            estiloLabel={estilos.textoLabel}
                            placeholder={inputs.labelEmail}
                            onChangeText={text => setValue('email', text)}
                            />
                            <TextField
                            secureTextEntry
                            error={errors?.senha} 
                            label={inputs.labelSenha}
                            estiloLabel={estilos.textoLabel}
                            placeholder={inputs.labelSenha}
                            onChangeText={text => setValue('senha', text)}
                            />
                        </View>
                    </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={estilos.caixaBotao}>
                <Botao style={[estilos.botao, estilos.textoBotao]} evento={handleSubmit(aoEnviar)} >{inputs.labelBotao}</Botao>
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