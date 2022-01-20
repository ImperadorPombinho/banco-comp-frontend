import React from "react";
import { StyleSheet, View } from "react-native";




const Linha = () => {

    return(
        <View style={estilos.configLinha}>
            <View style={estilos.linha} />
        </View>
    );

}

const estilos = StyleSheet.create({
    configLinha:{
        width: "100%",
        height: "5%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    linha:{
        width: "70%",
        height:"1%",
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid"
    }
});



export default Linha;