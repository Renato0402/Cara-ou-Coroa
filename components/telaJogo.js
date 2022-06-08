import {
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Globais from "./globais";

export default function () {
  const moedas = [
    require("../img/m1.png"), //coroa
    require("../img/m5.png"), //cara
    require("../img/m1.png"), //coroa
    require("../img/m2.png"),
    require("../img/m3.png"),
    require("../img/m4.png"),
    require("../img/m5.png"), //cara
    require("../img/m6.png"),
    require("../img/m7.png"),
    require("../img/m8.png"),
  ];

  let iMoeda = 0;

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  let maxSpins = Globais.qtdGiros;
  let maxWaitTime = Globais.tmpEspera;

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    await tempo(tmp);
  }

  async function girarMoeda() {
    iMoeda = 2;

    for (let i = 0; i < maxSpins * 5; i++) {
      iMoeda++;
      if (iMoeda > moedas.length - 1) {
        iMoeda = 2;
      }
      setMoedaAtual(moedas[iMoeda]);
      await espera(maxWaitTime);
    }

    let res = Math.floor(Math.random() * 10) + 1;
    if (res <= 5) res = 0;
    else res = 1;

    setMoedaAtual(moedas[res]);
  }

  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}>{Globais.titulo}</Text>
      <Image style={estilo.img} source={moedaAtual} />
      <TouchableOpacity
        style={estilo.btnGirar}
        onPress={() => {
          girarMoeda();
        }}
      >
        <Text style={estilo.txtBtn}>Girar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#000',
    padding:20
  },

  titulo: {
    justifyContent: "center",
    alignItems:'center',
    padding:20,
    fontSize:30,
    color:'#fc0',
    textTransform:'uppercase',
    textAlign: "center",
  },

  img: {
    height: 150,
  },

  btnGirar:{
      margin:20,
      backgroundColor:'#fc0',
      padding:15,
      width:'100%',
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  },
  txtBtn:{
      color:'#000',
      textTransform:'uppercase',
      fontSize:20
  }
});
