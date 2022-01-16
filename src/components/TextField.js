import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


const TextField = ({ label, estiloLabel, error, ...propsInput}) => {


    let estiloInput = estilos.input
    if(!error.valido){
        estiloInput = estilos.inputError
    }
    

    return(
        <View style={estilos.caixaInput}>
            <Text style={estiloLabel}>{label}</Text>
            <TextInput
            style={estiloInput}
            {...propsInput}
            />
            {!error.valido ? <Text style={estilos.errorMessage}>{error.textoAjuda}</Text> : null}

            
        </View>
    );
}
const estilos = StyleSheet.create({
    caixaInput:{
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "80%",
        alignItems: "flex-start"
    },
    input:{
        borderRadius: 30,
        backgroundColor: "#A6C2AB",
        borderColor: "#414141",
        borderWidth: 1,
        width: "100%",
        height: 50,
        paddingHorizontal: 10
    },
    inputError:{
        borderRadius: 30,
        backgroundColor: "#A6C2AB",
        borderColor: "rgba(200, 0, 55, 0.65)",
        borderWidth: 1,
        width: "100%",
        height: 50,
        paddingHorizontal: 10
    },
    errorMessage: {
        fontSize: 15,
        color: "rgba(210, 0, 40, 0.75)",
        marginTop: 15,
        textAlign: "center"
    }
});

export default TextField;