import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Botao from "../../../components/Botao";
import TextField from "../../../components/TextField";



const DadosConta = ({estilos, conta, envio, proximo}) => {
    const caixaLogin = estilos[0];
    const titulo = estilos[1];
    const labels = estilos[2];
    const caixaBotao = estilos[3];
    const estiloBotao = [estilos[4], estilos[5]]

    
    return(
        <>
            <View style={caixaLogin}>
                <Text style={titulo}>{conta.dados}</Text>
                <TextField 
                estiloLabel={labels}  
                error={} 
                placeholder={conta.labelEmail} 
                label={conta.labelEmail}
                onChangeText={(text) => {setValue('email', text)}}
                />
                <TextField 
                estiloLabel={labels}  
                error={} 
                placeholder={conta.labelSenha} 
                label={conta.labelSenha}
                onChangeText={(text) => {setValue('senha', text)}}
                />
                <TextField 
                estiloLabel={labels}  
                error={} 
                placeholder={conta.labelConfirmar} 
                label={conta.labelConfirmar}
                onChangeText={(text) => {
                    
                    setValue('confirmar', text)
                
                }}
                />
            </View>

            <View style={caixaBotao} >
                <Botao style={estiloBotao} evento={handleSubmit(aoEnviar)}>{conta.botaoProximo}</Botao>
            </View>
        </>
    );
}


export default DadosConta;