import React from "react";
import { Text, View } from "react-native";
import Botao from "../../../components/Botao";
import TextField from "../../../components/TextField";


const DadosConta = ({estilos, conta}) => {
    const caixaLogin = estilos[0];
    const titulo = estilos[1];
    const labels = estilos[2];
    const caixaBotao = estilos[3];
    const estiloBotao = [estilos[4], estilos[5]]

    return(
        <>
            <View style={caixaLogin}>
                <Text style={titulo}>{conta.dados}</Text>
                <TextField estiloLabel={labels}  placeholder={conta.labelEmail} label={conta.labelEmail}/>
                <TextField estiloLabel={labels}  placeholder={conta.labelSenha} label={conta.labelSenha}/>
                <TextField estiloLabel={labels}  placeholder={conta.labelConfirmar} label={conta.labelConfirmar}/>
            </View>

            <View style={caixaBotao} >
                <Botao style={estiloBotao} >{conta.botaoProximo}</Botao>
            </View>
        </>
    );
}


export default DadosConta;