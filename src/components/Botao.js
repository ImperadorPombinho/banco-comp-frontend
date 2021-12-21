
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Botao = ({children, style}) =>{
    const estiloBotao = style[0];
    const estiloTexto = style[1];
    return(
        <TouchableOpacity style={estiloBotao} activeOpacity={0.65}>
            <Text style={estiloTexto}>{children}</Text>
        </TouchableOpacity >
    );
}

export default Botao;