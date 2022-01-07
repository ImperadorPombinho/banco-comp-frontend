import React, { useEffect } from "react";
import { Image, StyleSheet, TextInput, View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import LogoApp from "../../../assets/images/logoAppBanco.png";
import { Platform } from "react-native";
import Botao from "../../components/Botao";
import { Box, Center, FormControl, Input, NativeBaseProvider, Stack } from "native-base";
import TelaEntrarCadastar from "../TelaEntrarCadastrar";
import { useForm } from "react-hook-form";
const TelaLogin = ({inputs, telaEntrarCadastrar}) => {
    const {register, setValue, handleSubmit} = useForm();

    useEffect(() => {
        register('email')
        register('senha')
    }, [register]);

    return(
        <>
        
        <Image style={estilos.imagem} source={LogoApp} />
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
                <ScrollView>

                
                    <NativeBaseProvider
                    >
                        
                        <Center>
                            <Center
                            height={350}
                            width={{
                                base: 350,
                                lg: 500
                            }}
                            
                            style={estilos.caixaLogin}
                            >
                                <FormControl>
                                        <Center>
                                            <Stack space={60}>    
                                            <Box>
                                            <Text style={estilos.textoLabel}>{inputs.labelEmail}</Text>
                                                <Input 
                                                size="lg" 
                                                variant="rounded" 
                                                style={estilos.inputConfig}
                                                type="text"
                                                />
                                            </Box>
                                            <Box>
                                            <Text style={estilos.textoLabel}>{inputs.labelSenha}</Text>
                                            <Input 
                                            style={estilos.inputConfig} 
                                            size="lg" variant="rounded" 
                                            type="password"
                                            />
                                            </Box>
                                            <Text style={estilos.textoEsqueceu}>{inputs.labelEsqueceu}</Text>
                                            </Stack>
                                        </Center>

                                </FormControl>
                            </Center>
                        </Center>
                    </NativeBaseProvider>
                </ScrollView>
            </KeyboardAvoidingView>
            <View style={estilos.caixaBotao}>
                <Botao style={[estilos.botao, estilos.textoBotao]} evento={() => {console.log("Ola")}} >{inputs.labelBotao}</Botao>
            </View>
            
        </>
    );
}

const estilos = StyleSheet.create({
    imagem: {
        width: 400,
        height: 320,
        position: 'relative'
    },
    caixaLogin: {
        backgroundColor: "#E6E6E6", 
        borderRadius: 30
        
    },
    textoLabel: {
        fontSize: 15,
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
        height: "20%",
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