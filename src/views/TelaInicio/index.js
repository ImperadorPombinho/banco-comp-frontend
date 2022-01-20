import React from "react"; 
import { Image, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./components/Cabecalho";
import Titulo from "./components/Titulo";




const TelaInicio = ({route, navigation}) => {
    const {estiloTela, Saldo} = route.params;
    return(
        <View style={[estiloTela, estilos.tela]}>
            <Titulo  titulo={Saldo.titulo} subtitulo={Saldo.subtitulo}  />
        </View>
    );
}


const estilos = StyleSheet.create({
    tela: {
        backgroundColor: "#A6C2AB"
    }

})
export default TelaInicio;