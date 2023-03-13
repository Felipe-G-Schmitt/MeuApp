import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Essa é a Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        Conheça o Sobre
      </Button>
      <br></br>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("StarScreen");
        }}
      >
        Conheça o Starbucks
      </Button>
      <br></br>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      >
        Conheça o Details
      </Button>
    </View>
  );
}
