import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);

  function fetchNewsData() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json()) // transforma a informação em JSON
      .then((json) => setData(json)) // mostra o resultado no console em JSON
      .catch((error) => console.error(error)); // mostra o erro no console
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={{fontSize: '30px', fontWeight:'bold', margin: '15px'}}>Fetch News</Text>
            {data.results?.map((item) => (
                <Text style={{ fontSize: '25px', margin: '5px'}} key={item.id}>{item.name} | {item.status} | {item.species} | {item.gender}</Text>
            ))}
    </View>
    </ScrollView>
  );
}
