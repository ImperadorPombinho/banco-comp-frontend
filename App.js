import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaEntrarCadastar from './src/views/TelaEntrarCadastrar';
import EntrarCadastrar from './src/mocks/EntrarCadastrar';
import { useFonts, ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "ReemKufiRegular": ReemKufi_400Regular
  })
  if(!fonteCarregada){
    return <AppLoading />
  }
  return (
    <View style={styles.tela}>
        <StatusBar style="auto" />
        <TelaEntrarCadastar {...EntrarCadastrar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    minHeight: "100%",
    minWidth: "100%",
    flexDirection:'column',
    backgroundColor:'#2F942F'
  },
});
