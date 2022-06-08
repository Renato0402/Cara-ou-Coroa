import Globais from "./globais";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function () {
  const [giros, setGiros] = useState(Globais.qtdGiros);
  const [tempo, setTempo] = useState(Globais.tmpEspera);

  const setarGiros = (g) => {
    Globais.qtdGiros = parseInt(g);
    setGiros(g);
  };

  const setarTempo = (t) => {
    Globais.tmpEspera = parseInt(t);
    setTempo(t);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.txt}>Quantidade de giros:</Text>
      <TextInput
        style={estilos.cxTxt}
        value={String(giros)}
        onChangeText={(text) => {
          setarGiros(text);
        }}
      />

      <Text style={estilos.txt}>Velocidade do giro (Quanto maior, mais lento):</Text>
      <TextInput
        style={estilos.cxTxt}
        value={String(tempo)}
        onChangeText={(text) => {
          setarTempo(text);
        }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 20,
  },

  txt: {
    color: "#fff",
  },
  cxTxt: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: "#fc0",
  },
});
