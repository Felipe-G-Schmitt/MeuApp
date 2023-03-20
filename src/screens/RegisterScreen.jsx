import { View } from "react-native";
import { Paragraph, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph> Realize o seu cadastro </Paragraph>
        <TextInput 
            label={"Email"}
            placeholder="Digite seu email"
        />
        <TextInput 
            placeholder="Digite sua senha" 
            secureTextEntry={true} 
        />
      </View>
    </View>
  );
}
