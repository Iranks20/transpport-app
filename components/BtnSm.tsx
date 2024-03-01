import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type BtnSmType = {
  arrowBack?: string;
  showArrowBack?: boolean;

  /** Style props */
  btnSmPosition?: string;
  btnSmTop?: number | string;
  btnSmLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BtnSm = ({
  arrowBack,
  showArrowBack,
  btnSmPosition,
  btnSmTop,
  btnSmLeft,
}: BtnSmType) => {
  const btnSmStyle = useMemo(() => {
    return {
      ...getStyleValue("position", btnSmPosition),
      ...getStyleValue("top", btnSmTop),
      ...getStyleValue("left", btnSmLeft),
    };
  }, [btnSmPosition, btnSmTop, btnSmLeft]);

  return (
    <View style={[styles.btnsm, btnSmStyle]}>
      <View style={styles.btnsmChild} />
      {showArrowBack && <Text style={styles.arrowBack}>{arrowBack}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  btnsmChild: {
    height: "118.75%",
    width: "118.75%",
    top: "-9.37%",
    right: "-9.37%",
    bottom: "-9.37%",
    left: "-9.37%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.background,
    shadowColor: "#fff",
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    position: "absolute",
  },
  arrowBack: {
    top: "18.75%",
    left: "18.75%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.icon,
    color: Color.black,
    textAlign: "left",
    textShadowColor: "#fff",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 0,
    position: "absolute",
  },
  btnsm: {
    width: 32,
    height: 32,
  },
});

export default BtnSm;
