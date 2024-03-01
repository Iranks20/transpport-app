import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from '@react-navigation/stack';
import EmailFormContainer from "../components/EmailFormContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

type RootStackParamList = {
  SignUp: undefined; // Add other params as needed
  Login: undefined;
  SignUp1: undefined;
};

// Define the navigation prop type for the SignUp screen
type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp1'>;

// Define props for the SignUp component
type Props = {
  navigation: SignUpNavigationProp;
};


const SignUp1: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.signup}>
      <Text style={[styles.login, styles.loginText]} onPress={() => navigation.navigate('Login')}>Login</Text>
      <View style={styles.btnsm}>
        <View style={styles.btnsmChild} />
        <Text style={[styles.bookmark, styles.enTypo]}>bookmark</Text>
      </View>
      <Text style={[styles.en, styles.enTypo]}>EN</Text>
      <Image
        style={styles.techweltLogoIcon}
        contentFit="cover"
        source={require("../assets/techwelt-logo.png")}
      />
      <EmailFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
  },
  enTypo: {
    fontFamily: FontFamily.icon,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  login: {
    marginLeft: -43.5,
    top: 514,
    left: "50%",
    fontSize: FontSize.size_13xl,
    textDecoration: "underline",
    letterSpacing: -1,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    textAlign: "left",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  btnsmChild: {
    height: "118.75%",
    width: "118.75%",
    top: "-9.37%",
    right: "-9.37%",
    bottom: "-9.37%",
    left: "-9.37%",
    marginLeft: -16,
    borderRadius: Border.br_7xs,
    shadowColor: "#fff",
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    position: "absolute",
    backgroundColor: Color.background,
  },
  bookmark: {
    top: "18.75%",
    left: "18.75%",
    color: Color.black,
    display: "none",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
  },
  btnsm: {
    top: 27,
    left: 312,
    width: 32,
    height: 32,
    position: "absolute",
  },
  en: {
    top: 30,
    left: 314,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xl,
  },
  techweltLogoIcon: {
    height: "9.21%",
    width: "21.33%",
    top: "6.77%",
    right: "39.73%",
    bottom: "84.01%",
    left: "38.93%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signup: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.background,
  },
});

export default SignUp1;
