import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


const TextField = ({error, label, estiloLabel, ...propsInput}) => {
    const estiloInput = estilos.input
    if(error){
        estiloInput = estilos.inputError
    }


    return(
        <View style={estilos.caixaInput}>
            <Text style={estiloLabel}>{label}</Text>
            <TextInput
            style={estiloInput}
            {...propsInput}
            />
            {error ? <Text style={estilos.errorMessage}>{error.message}</Text> : null}

            
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
        textAlign: "center"
    },
    inputError:{
        borderRadius: 30,
        backgroundColor: "#A6C2AB",
        borderColor: "rgba(200, 0, 55, 0.65)",
        borderWidth: 1
    },
    errorMessage: {
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 10,
        color: "rgba(210, 0, 40, 0.4)"
    }
});

export default TextField;