import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const EmailFormContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.childPosition]} />
      <View style={[styles.resendEmail, styles.resendLayout]}>
        <View style={[styles.resendEmailChild, styles.resendLayout]} />
        <Text style={styles.resendEmail1}>Resend Email</Text>
      </View>
      <Text
        style={[styles.verificationEmailHas, styles.emailTypo]}
      >{`Verification Email has been sent
to below registered Email`}</Text>
      <Text style={[styles.test123gmailcom, styles.emailTypo]}>
        test123@gmail.com
      </Text>
      <Text style={[styles.notReceivedEmailContainer, styles.emailTypo]}>
        <Text style={styles.notReceivedEmail}>Not Received Email</Text>?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 216,
    width: 292,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  resendLayout: {
    height: 34,
    width: 157,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorLightgray,
    height: 216,
    width: 292,
    position: "absolute",
  },
  resendEmailChild: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  resendEmail1: {
    marginLeft: -44.5,
    top: 7,
    left: "50%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  resendEmail: {
    top: 169,
    left: 67,
  },
  verificationEmailHas: {
    top: 24,
    left: 40,
    color: Color.colorForestgreen,
  },
  test123gmailcom: {
    top: 74,
    left: 81,
    color: Color.colorRoyalblue,
  },
  notReceivedEmail: {
    textDecoration: "underline",
  },
  notReceivedEmailContainer: {
    top: 136,
    left: 78,
    color: Color.colorSteelblue,
  },
  rectangleParent: {
    top: 261,
    left: 41,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginLeft: 18,
  },
});

export default EmailFormContainer;
