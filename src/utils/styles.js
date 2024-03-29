import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  widthFull:{
    width: width,
  },
  distBottom: {
    marginBottom: 20,
  },
  distBottomHome: {
    marginBottom: 10,
  },
  containerFullWidth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  viewFetch:{
    flex: 1,
    backgroundColor: "#3B353D",
    alignItems: "left",
    justifyContent: "left",
    color: "white", 
    border: "3px solid #DBD2D0",
    borderRadius: 10,
    padding: 10,
  },
  imagePersonagem: {
    
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default styles;
