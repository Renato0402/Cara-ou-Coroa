import { StyleSheet } from "react-native";
import StatusBar from "./components/statusBar";
import React from "react";
import TelaConfig from "./components/telaConfig";
import TelaJogo from "./components/telaJogo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Menus = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={temaMenu}>
      <StatusBar />
      <Menus.Navigator initialRouteName="Jogo">
        <Menus.Screen
          name="Jogo"
          component={TelaJogo}
          options={{
            tabBarIcon: (size) => {
              size = 0;
            },
            tabBarLabel: "Jogo",
          }}
        />
        <Menus.Screen
          name="Configurações"
          component={TelaConfig}
          options={{
            tabBarIcon: (size) => {
              size = 0;
            },
            tabBarLabel: "Configurações",
          }}
        />
      </Menus.Navigator>
    </NavigationContainer>
  );
}

const temaMenu = {
  dark: false,
  colors: {
    primary: "rgb(255,255,255)", //Cor do texto do menu
    background: "rgb(0,0,0)", //Cor do fundo
    card: "rgb(0,0,0)", //Cor do fundo do menu
    text: "rgb(255,255,255)", //Cor do texto
    border: "rgb(255,255,255)", // Cor da borda
    notification: "rgb(255,0,0)", //Cor do emblema do navegador
  },
};
