import React from "react"; 
import { Image, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./components/Cabecalho";




const TelaInicio = ({route, navigation}) => {
    const {estiloTela} = route.params;
    return(
        <View style={[estiloTela, estilos.tela]}>
            <Cabecalho />
        </View>
    );
}


const estilos = StyleSheet.create({
    tela: {
        backgroundColor: "#A6C2AB"
    }

})
export default TelaInicio;