import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(0);
  const [key, setKey] = useState(0); // adicionando estado para mudar a key

  useEffect(() => {
    retornaTotalDePersonagens();
  }, []);

  function buscaPersonagemAleatorio() {
    fetch(
      "https://rickandmortyapi.com/api/character/" + retornaIndiceAleatorio()
    )
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  function retornaTotalDePersonagens() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }

  function retornaIndiceAleatorio() {
    return Math.floor(Math.random() * totalPersonagens);
  }

  function checkIfPersonagemEstaVivo() {
    if (personagem && personagem.status === "Alive") {
      alert("Você acertou!");
    } else {
      alert("Você errou!");
    }
    setKey(key + 1);
  }

  return (
    <View style={styles.container}>
      <Image
        key={key}
        source={{ uri: personagem?.image }}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text>Personagem: {personagem?.name}</Text>
      <View>
        <Button onPress={checkIfPersonagemEstaVivo}>SIM</Button>
        <Button onPress={checkIfPersonagemEstaVivo}>NÃO</Button>
      </View>
      <Button onPress={buscaPersonagemAleatorio}>Buscar Personagem</Button>
    </View>
  );
}
