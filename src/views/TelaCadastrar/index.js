import { Box, Center, Flex, NativeBaseProvider, Progress, Spacer } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextField from "../../components/TextField";
import DadosConta from "./components/DadosConta";



const TelaCadastro = ({route, navigation}) => {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const {estiloTela, Cadastro} = route.params;

    function proximaEtapa(){
        setEtapaAtual(etapaAtual + 1);
    }
    function voltarEtapa(){
        setEtapaAtual(etapaAtual - 1);
    }

    const listaFormulario = [
    <DadosConta estilos={[estilos.caixaLogin, 
    estilos.titulo, 
    estilos.labels, 
    estilos.caixaBotao, 
    estilos.botao ,
    estilos.textoBotao]} 
    conta={Cadastro.conta}
    
    />
        ];
    return(
        <View style={[estiloTela, estilos.tela]}>
                <NativeBaseProvider>
                    <Flex style={estilos.configProgress} >
                               
                            <Box w="50%" >
                                <Progress size="md" colorScheme="emerald" value={0}/>
                            </Box>
                        
                    </Flex>
                </NativeBaseProvider>
            
            <View style={estilos.configCaixaLogin}>
                {listaFormulario[etapaAtual]}
            </View>
        </View>
    );



}

const estilos = StyleSheet.create({
    tela: {
        backgroundColor: '#A6C2AB'
    },
    progresso:{
        fontSize: 20,
        textAlign: 'center',
        color: '#414141',
        paddingTop: 30
    },
    configProgress: {
        width: '100%',
        height: '50%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    configCaixaLogin: {
        height: '80%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaLogin:{
        height: 450,
        width: 350,
        backgroundColor: '#E6E6E6',
        borderRadius: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titulo: {
        fontSize: 18,
        color: '#414141',
        textAlign: 'center'
    },
    labels:{
        fontSize: 14,
        color: '#414141',
        textAlign: 'left',
        paddingLeft: 15,
        marginBottom: 10,
        fontFamily: "RobotoRegular",
        lineHeight: 18
    },
    caixaBotao:{
        height: '23%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#2F942F',
        borderRadius: 24,
        height: 50,
        width: 140
    },
    textoBotao: {
        color: '#E6E6E6',
        fontSize: 14,
        fontFamily: 'RobotoRegular',
        lineHeight: 15,
        textAlign: 'center',
        paddingTop: 18
     }
});

export default TelaCadastro;

