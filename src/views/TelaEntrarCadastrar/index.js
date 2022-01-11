
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Pagando from "../../../assets/images/pagando.png"
import Botao from "../../components/Botao";
import TelaLogin from "../TelaLogin";


const TelaEntrarCadastar = ({route, navigation}) => {

    const {entrarCadastrar, estiloTelaToda}  = route.params;
    return(
        <View style={estiloTelaToda}>
            <View style={estilos.divImagem}>
                <Image source={Pagando} style={estilos.imagem} />
            </View>
            <View style={estilos.configTexto} >
                <Text style={estilos.texto} >{entrarCadastrar.descricao}</Text>
            </View>
            
            <View style={estilos.botaoconfig}>
                <Botao evento={() => {navigation.navigate('Login')}} style={[estilos.estiloBotao, estilos.textoBotao]} >{entrarCadastrar.entrar}</Botao>
                <Botao style={[estilos.estiloBotao, estilos.textoBotao]} >{entrarCadastrar.cadastrar}</Botao>
            </View>

            
            
        </View>

        

    );
}

const estilos =StyleSheet.create({
    imagem:{
        width: "100%",
        height: "70%"
    },
    divImagem: {
        height: "55%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    configTexto:{
        width: "98%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    texto: {
        fontSize: 20,
        lineHeight: 22,
        fontFamily: "ReemKufiRegular",
        fontWeight: "normal",
        textAlign: 'center',
        color: "#FFFFFF"
    },
    botaoconfig:{
        marginTop: 80,
        marginBottom: 70,
        paddingLeft: 30,
        height: "15.1%",
        width: "95%",
        flexDirection: 'column',
        justifyContent: 'space-between'


    },
    estiloBotao: {

        paddingVertical: 10,
        backgroundColor: "#E6E6E6",
        borderRadius: 30,
    },
    textoBotao:{
        textAlign: "center",
        color: "#000000",
        fontSize: 19,
        lineHeight: 24,
        fontWeight: "bold"
    }
});

export default TelaEntrarCadastar;