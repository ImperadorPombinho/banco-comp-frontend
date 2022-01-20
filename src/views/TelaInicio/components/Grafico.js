import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";



const Grafico = ({grafico}) => {

    let dadosGrafico = {
        labels: ['20-01', '21-01', '22-01', '23-01', '24-01'],
        datasets: [
            {
                data: [550, 500, 600, 550, 500]
            }
        ]
    }
    const chartConfig = {
        backgroundGradientFrom: "#BACFA7",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#A6C2AB",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(53, 209, 97, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

    return(
        <View style={estilos.configGrafico} >
            <View style={estilos.divGrafico} >
                <View style={estilos.borderGrafico}>
                    <Text style={estilos.tituloGrafico} >{grafico}</Text>
                    <LineChart 
                    data={dadosGrafico}
                    width={250}
                    height={250}
                    style={{
                        borderRadius: 25
                    }}
                    chartConfig={chartConfig}
                    bezier
                    />
                </View>
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    configGrafico: {
        width: "100%",
        height: "60%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    divGrafico: {
        width: "85%",
        height: "75%",
        backgroundColor: "#E6E6E6",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
        borderStyle: "solid",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    borderGrafico: {
        width: "80%",
        height: "90%",
        borderColor: "#414141",
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 25,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    
    tituloGrafico: {
        fontSize: 18,
        lineHeight: 20,
        textAlign: "center",
        color: "#414141"
    }
});

export default Grafico;