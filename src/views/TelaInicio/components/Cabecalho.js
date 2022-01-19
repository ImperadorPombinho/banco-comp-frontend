
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import IconBanco from '../../../../assets/images/logoAppBanco.png'


const Cabecalho = () => {
    return(
        <View style={estilos.cabecalho} >
            <Image  style={estilos.image} source={IconBanco} />
        </View>    
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        width: "100%",
        height: 80,
        backgroundColor: "#2F942F",
    
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    image:{
        width: 50,
        height: 60,
        marginTop: 30
    }
})

export default Cabecalho;