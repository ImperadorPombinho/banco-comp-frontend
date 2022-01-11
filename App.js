import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TelaEntrarCadastar from './src/views/TelaEntrarCadastrar';
import EntrarCadastrar from './src/mocks/EntrarCadastrar';
import Login from './src/mocks/Login';
import { useFonts, ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import TelaLogin from './src/views/TelaLogin';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RotaPilha = createNativeStackNavigator();

export default function App() {
  const [fonteCarregada] = useFonts({
    "ReemKufiRegular": ReemKufi_400Regular,
    "RobotoRegular": Roboto_400Regular
  })
  if(!fonteCarregada){
    return <AppLoading />
  }
  return (
    
    <NavigationContainer>
      
          <StatusBar style="auto" />
          <RotaPilha.Navigator>
          <RotaPilha.Screen 
          name='Inicio' 
          component={TelaEntrarCadastar}  
          initialParams={
            {entrarCadastrar: EntrarCadastrar.entrarCadastrar, 
            estiloTelaToda: styles.tela
            }} 
          options={{headerShown: false}}
          />
          <RotaPilha.Screen 
          name='Login'
          component={TelaLogin}
          initialParams={
            {
              inputs: Login.inputs,
              estiloTelaToda: styles.tela
            }
            
          }
          options={
            {
              headerShown: false
            }
        }
          />
          </RotaPilha.Navigator>
      
    </NavigationContainer>
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
