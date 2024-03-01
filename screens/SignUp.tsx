import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from "expo-image";
import FormContainer from "../components/FormContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";


type RootStackParamList = {
  SignUp: undefined; // Add other params as needed
  Login: undefined;
  SignUp1: undefined;
};

// Define the navigation prop type for the SignUp screen
type SignUpNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

// Define props for the SignUp component
type Props = {
  navigation: SignUpNavigationProp;
};

// const SignUp = ({ navigation }) => {
const SignUp: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.signup}>
      <View style={styles.emailParent}>
        <FormContainer
          dimensionsCode={require("../assets/icon.png")}
          userFullName="Full Name"
        />
        <FormContainer
          dimensionsCode={require("../assets/icon1.png")}
          userFullName="Email"
          iconMarginTop={20}
          propTop="35.42%"
        />
        <View style={styles.username}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={[styles.username1, styles.cityText]}>Username</Text>
          <Image
            style={[styles.verified1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/verified-1.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Text style={[styles.username2, styles.bookmarkText]}>Username</Text>
          <Text style={styles.search}>search</Text>
        </View>
        <View style={styles.username}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Text style={[styles.text, styles.textFlexBox]}>+971</Text>
          <View style={styles.phoneNumberItem} />
          <Image
            style={[styles.phoneNumberInner, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector-9.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon3.png")}
          />
          <Text style={[styles.phoneNo, styles.cityPosition]}>Phone No.</Text>
        </View>
        <View style={styles.username}>
          <View style={[styles.usernameChild, styles.childPosition]} />
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
          <Text style={[styles.city, styles.cityPosition]}>City</Text>
        </View>
        <View style={styles.username}>
          <View style={[styles.usernameChild, styles.childPosition]} />
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
          <Text style={[styles.password1, styles.cityPosition]}>Password</Text>
        </View>
        <FormContainer
          dimensionsCode={require("../assets/icon5.png")}
          userFullName="Confirm Password"
          iconMarginTop={20}
          propTop="31.25%"
        />
      </View>
      <View style={styles.signup1}>
        <View style={[styles.signupChild, styles.childShadowBox]} />
        <Text style={[styles.login, styles.loginTypo]} onPress={() => navigation.navigate('SignUp1')}>Sign Up</Text>
      </View>
      {/* <Text style={[styles.login1, styles.loginTypo]}>Login</Text> */}
      <TouchableOpacity>
        <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
      </TouchableOpacity>
      <View style={styles.btnsm}>
        <View style={[styles.btnsmChild, styles.childShadowBox]} />
        <Text style={[styles.bookmark, styles.enTypo]}>bookmark</Text>
      </View>
      <Text style={[styles.en, styles.enTypo]}>EN</Text>
      <Image
        style={[styles.techweltLogoIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/techwelt-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    borderRadius: Border.br_101xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  cityText: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  bookmarkText: {
    display: "none",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    color: Color.black,
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  cityPosition: {
    top: "31.25%",
    fontSize: FontSize.size_base,
  },
  childShadowBox: {
    shadowColor: "#fff",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    position: "absolute",
  },
  enTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.icon,
    textAlign: "left",
    position: "absolute",
  },
  usernameChild: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  username1: {
    color: Color.black,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
    fontSize: FontSize.size_base,
    left: "17.68%",
    top: "35.42%",
  },
  verified1Icon: {
    height: "31.25%",
    width: "4.57%",
    bottom: "33.33%",
    left: "88.11%",
    right: "7.32%",
    maxWidth: "100%",
    top: "35.42%",
  },
  icon: {
    height: "62.5%",
    width: "9.15%",
    right: "85.67%",
    bottom: "18.75%",
    left: "5.18%",
    top: "18.75%",
  },
  username2: {
    top: "31.25%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.rubikRegular,
    display: "none",
    left: "17.68%",
  },
  search: {
    left: "85.98%",
    fontSize: FontSize.icon_size,
    color: Color.gray,
    fontFamily: FontFamily.icon,
    top: "29.17%",
    display: "none",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  username: {
    marginTop: 20,
    height: 48,
    width: 328,
  },
  text: {
    top: "27.08%",
    left: "17.38%",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSteelblue,
    fontSize: FontSize.size_base,
  },
  phoneNumberItem: {
    height: "72.92%",
    width: "0.3%",
    top: "15.63%",
    right: "62.96%",
    bottom: "11.46%",
    left: "36.74%",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.24)",
    borderRightWidth: 1,
    position: "absolute",
  },
  phoneNumberInner: {
    height: "12.5%",
    width: "3.66%",
    top: "43.75%",
    right: "65.85%",
    bottom: "43.75%",
    left: "30.49%",
  },
  phoneNo: {
    left: "43.29%",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
  },
  city: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
    left: "17.68%",
  },
  eyeIcon: {
    height: "41.67%",
    width: "6.1%",
    bottom: "29.17%",
    left: "86.59%",
    top: "29.17%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "7.32%",
    position: "absolute",
    overflow: "hidden",
  },
  password1: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.rubikRegular,
    position: "absolute",
    left: "17.68%",
  },
  emailParent: {
    top: 160,
    left: "50%",
    marginLeft: -164.5,
    position: "absolute",
  },
  signupChild: {
    backgroundColor: Color.colorDarkslategray,
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
  login: {
    left: "40.85%",
    textAlign: "center",
    top: "31.25%",
    fontSize: FontSize.size_base,
  },
  signup1: {
    top: 641,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    height: 48,
    width: 328,
    left: "50%",
    marginLeft: -164.5,
    position: "absolute",
  },
  login1: {
    marginLeft: -43.5,
    top: 722,
    fontSize: FontSize.size_13xl,
    textDecoration: "underline",
    letterSpacing: -1,
    color: Color.colorDarkslategray,
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    left: "50%",
  },
  btnsmChild: {
    height: "118.75%",
    width: "118.75%",
    top: "-9.37%",
    right: "-9.37%",
    bottom: "-9.37%",
    left: "-9.37%",
    borderRadius: Border.br_7xs,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: Color.background,
    shadowColor: "#fff",
  },
  bookmark: {
    left: "18.75%",
    display: "none",
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    color: Color.black,
    top: "18.75%",
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
  },
  techweltLogoIcon: {
    height: "9.21%",
    width: "21.33%",
    top: "6.77%",
    right: "39.73%",
    bottom: "84.01%",
    left: "38.93%",
  },
  signup: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.background,
  },
});

export default SignUp;
