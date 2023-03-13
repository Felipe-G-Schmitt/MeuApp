import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";


export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Essa é a Details Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Volte para a Home
      </Button>
    </View>
  );
}