import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Titulo = ({titulo, subtitulo}) => {

    return(
        <View style={estilos.configDivTitulo}>
            <View style={estilos.divTitulo} >
                <View style={estilos.borderTitulo} >
                    <Text style={estilos.texto}>{titulo}</Text>
                    <Text style={estilos.texto}>{subtitulo}</Text>
                </View>
            </View>
        </View>
    );
}


const estilos = StyleSheet.create({
    configDivTitulo: {
        width: "100%",
        height: "25%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        
    },
    divTitulo: {
        backgroundColor: "#E6E6E6",
        width: "80%",
        height: "55%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    borderTitulo:{
        width: "85%",
        height: "75%",
        borderWidth: 2,
        borderColor: "#414141",
        borderStyle: "dashed",
        borderRadius: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
        

    },
    texto: {
        fontSize: 18,
        lineHeight: 25,
        color: "#414141",
        textAlign: "center"
    }
});

export default Titulo;