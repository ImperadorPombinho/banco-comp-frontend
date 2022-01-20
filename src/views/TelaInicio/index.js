import React from "react"; 
import { Image, StyleSheet, Text, View } from "react-native";
import Linha from "../../components/Linha";
import Cabecalho from "./components/Cabecalho";
import Grafico from "./components/Grafico";
import Titulo from "./components/Titulo";




const TelaInicio = ({route, navigation}) => {
    const {estiloTela, Saldo} = route.params;
    return(
        <View style={[estiloTela, estilos.tela]}>
            <Titulo  titulo={Saldo.titulo} subtitulo={Saldo.subtitulo}  />
            <Linha />
            <Grafico grafico={Saldo.grafico} />
        </View>
    );
}


const estilos = StyleSheet.create({
    tela: {
        backgroundColor: "#A6C2AB"
    }

})
export default TelaInicio;