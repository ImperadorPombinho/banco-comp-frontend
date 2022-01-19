import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import TelaEntrarCadastar from './src/views/TelaEntrarCadastrar';
import EntrarCadastrar from './src/mocks/EntrarCadastrar';
import Login from './src/mocks/Login';
import { useFonts, ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import TelaLogin from './src/views/TelaLogin';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCadastro from './src/views/TelaCadastrar';
import Cadastro from './src/mocks/Cadastro';
import validacoesGenericas from './src/contexts/validacoesGenericas';
import { validarCidade, 
  validarConfirmarSenha, 
  validarCpf, 
  validarEmail, 
  validarEstado, 
  validarIdade, 
  validarNome, 
  validarSenha, 
  validarSobreNome} 
  from './src/models/validacoes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaInicio from './src/views/TelaInicio';

const RotaPilha = createNativeStackNavigator();
const NavBarBaixo = createBottomTabNavigator();


const Inicio = ({route, navigation}) => {
  const {estiloTela} = route.params;

  return(
    <NavBarBaixo.Navigator>
      <NavBarBaixo.Screen  
      name='Saldo' 
      component={TelaInicio} 
      initialParams={{estiloTela: estiloTela}} 
      options={{headerShown: false}}
      />

    </NavBarBaixo.Navigator>
  );

}





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
          <validacoesGenericas.Provider value={{
            email: validarEmail, 
            cpf: validarCpf, 
            senha: validarSenha, 
            confirmar: validarConfirmarSenha,
            cidade: validarCidade,
            estado: validarEstado,
            idade: validarIdade,
            nome: validarNome,
            sobrenome: validarSobreNome
            
            }}>
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
          <RotaPilha.Screen 
          name='Cadastro'
          component={TelaCadastro}
          initialParams={{
            estiloTela: styles.tela,
            Cadastro: Cadastro
          }}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#E6E6E6',
            headerStyle: {
              backgroundColor: '#2F942F'
            }
          }}
        
          />
          <RotaPilha.Screen 
          name='Funcoes'
          component={Inicio}
          options={{
            headerShown: false
          }}
          initialParams={{
            estiloTela: styles.tela
          }}
          />
          
          </RotaPilha.Navigator>
        </validacoesGenericas.Provider>
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
