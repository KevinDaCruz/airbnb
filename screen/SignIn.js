import { useNavigation } from "@react-navigation/core";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/logo.png";

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} styles={styles.logo}></Image>
    </SafeAreaView>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  logo: {
    height: 50,
    width: 30,
  },
});
