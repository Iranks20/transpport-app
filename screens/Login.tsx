import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from "expo-image";
import BtnSm from "../components/BtnSm";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

type RootStackParamList = {
  SignUp: undefined; // Add other params as needed
  Login: undefined;
  SignUp1: undefined;
};

// Define the navigation prop type for the SignUp screen
type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// Define props for the SignUp component
type Props = {
  navigation: SignUpNavigationProp;
};


const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <Text style={styles.signUp}>Sign up</Text>
      <View style={[styles.inputresting, styles.inputrestingLayout]}>
        <View style={[styles.inputrestingChild, styles.childPosition]} />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Text style={styles.passwordTypo}>Email or Username</Text>
        <Text style={styles.searchTypo}>search</Text>
      </View>
      <View style={[styles.inputresting1, styles.inputrestingLayout]}>
        <View style={[styles.inputrestingChild, styles.childPosition]} />
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={styles.passwordTypo}>Password</Text>
        <Text style={styles.searchTypo}>search</Text>
      </View>
      <Image
        style={[styles.buttonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/button.png")}
      />
      <View style={[styles.btnprimary, styles.btnprimaryShadowBox]}>
        <View style={[styles.btnprimaryChild, styles.btnprimaryShadowBox]} />
        
        <Text style={styles.login1} onPress={() => navigation.navigate('SignUp')}>LOGIN</Text>
        
      </View>
      <BtnSm
        arrowBack="bookmark"
        showArrowBack={false}
        btnSmPosition="absolute"
        btnSmTop={27}
        btnSmLeft={312}
      />
      <Text style={styles.en}>EN</Text>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <View style={[styles.googleLogin, styles.loginLayout]}>
        <View style={styles.googleLoginChild} />
        <Text style={[styles.google, styles.googleTypo]}>Google</Text>
        <Image
          style={styles.google1Icon}
          contentFit="cover"
          source={require("../assets/google-1.png")}
        />
      </View>
      <View style={[styles.facebookLogin, styles.loginLayout]}>
        <View style={styles.facebookLoginChild} />
        <Image
          style={styles.facebook1Icon}
          contentFit="cover"
          source={require("../assets/facebook-1.png")}
        />
        <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      </View>
      <View style={styles.defaultParent}>
        <View style={styles.default} />
        <View style={[styles.knob20, styles.btnprimaryShadowBox]} />
        <Text style={styles.description}>Keep me Logged In</Text>
      </View>
      <Image
        style={[styles.techweltLogoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/techwelt-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputrestingLayout: {
    height: 48,
    width: 328,
  },
  childPosition: {
    borderRadius: Border.br_101xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  btnprimaryShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  loginLayout: {
    height: 44,
    width: 126,
    position: "absolute",
  },
  googleTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    lineHeight: 44,
    fontSize: FontSize.size_xs,
    top: 0,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  signUp: {
    top: 172,
    left: 130,
    fontSize: FontSize.size_13xl,
    letterSpacing: -1,
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    textDecoration: "underline",
    position: "absolute",
  },
  inputrestingChild: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  icon: {
    height: "62.5%",
    width: "9.15%",
    top: "18.75%",
    right: "85.67%",
    bottom: "18.75%",
    left: "5.18%",
  },
  passwordTypo: {
    color: Color.black,
    fontFamily: FontFamily.rubikRegular,
    fontSize: FontSize.size_base,
    left: "19.21%",
    top: "31.25%",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  searchTypo: {
    display: "none",
    color: Color.gray,
    fontSize: FontSize.icon_size,
    left: "85.98%",
    fontFamily: FontFamily.icon,
    top: "29.17%",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  inputresting: {
    top: 256,
    left: 27,
    width: 328,
    position: "absolute",
  },
  eyeIcon: {
    height: "41.67%",
    width: "6.1%",
    right: "7.32%",
    bottom: "29.17%",
    left: "86.59%",
    top: "29.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  inputresting1: {
    top: 324,
    left: 27,
    width: 328,
    position: "absolute",
  },
  buttonIcon: {
    height: "7.11%",
    width: "13.33%",
    top: "70.44%",
    right: "43.73%",
    bottom: "22.45%",
    left: "42.93%",
  },
  btnprimaryChild: {
    backgroundColor: Color.colorDarkslategray,
    shadowColor: "#fff",
    shadowRadius: 20,
    elevation: 20,
    borderRadius: Border.br_101xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  login1: {
    left: "42.38%",
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: "31.25%",
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    position: "absolute",
  },
  btnprimary: {
    top: 442,
    left: 23,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    width: 328,
  },
  en: {
    top: 30,
    left: 314,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.icon,
    textAlign: "left",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  forgotPassword: {
    top: 526,
    left: 142,
    fontSize: 10,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorDarkslategray,
    textDecoration: "underline",
    position: "absolute",
  },
  googleLoginChild: {
    top: 1,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
    left: 0,
    borderStyle: "solid",
    width: 126,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  google: {
    left: 56,
  },
  google1Icon: {
    top: 11,
    left: 26,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  googleLogin: {
    top: 664,
    left: 59,
  },
  facebookLoginChild: {
    top: 0,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 0,
    width: 126,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  facebook1Icon: {
    top: 8,
    left: 17,
    width: 26,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  facebook: {
    left: 51,
  },
  facebookLogin: {
    top: 6489,
    left: 6599,
  },
  default: {
    width: "23.81%",
    right: "76.19%",
    borderRadius: 37,
    backgroundColor: "#d01400",
    borderColor: "#c9c9c9",
    borderWidth: 0.5,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  knob20: {
    height: "80%",
    width: "9.52%",
    top: "10%",
    right: "77.38%",
    bottom: "10%",
    left: "13.1%",
    borderRadius: 12,
    shadowColor: "rgba(51, 51, 51, 0.3)",
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.colorWhite,
  },
  description: {
    marginLeft: -36,
    left: "50%",
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    color: "#1a1a1a",
    fontSize: FontSize.size_xs,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  defaultParent: {
    height: "2.46%",
    width: "44.8%",
    top: "48.52%",
    right: "24%",
    bottom: "49.01%",
    left: "31.2%",
    position: "absolute",
  },
  techweltLogoIcon: {
    height: "9.21%",
    width: "21.33%",
    top: "6.77%",
    right: "39.73%",
    bottom: "84.01%",
    left: "38.93%",
  },
  login: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.background,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
