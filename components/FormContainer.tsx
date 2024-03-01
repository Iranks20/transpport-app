import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type FormContainerType = {
  dimensionsCode?: ImageSourcePropType;
  userFullName?: string;

  /** Style props */
  iconMarginTop?: number | string;
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  dimensionsCode,
  userFullName,
  iconMarginTop,
  propTop,
}: FormContainerType) => {
  const emailStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", iconMarginTop),
    };
  }, [iconMarginTop]);

  const fullNameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.email, emailStyle]}>
      <View style={styles.emailChild} />
      <Image style={styles.icon} contentFit="cover" source={dimensionsCode} />
      <Text style={[styles.fullName, styles.searchText, fullNameStyle]}>
        {userFullName}
      </Text>
      <Text style={[styles.search, styles.searchText]}>search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchText: {
    textShadowRadius: 0,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  emailChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_101xl,
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
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  fullName: {
    top: "35.42%",
    left: "17.68%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.rubikRegular,
    color: Color.black,
  },
  search: {
    top: "29.17%",
    left: "85.98%",
    fontSize: FontSize.icon_size,
    fontFamily: FontFamily.icon,
    color: Color.gray,
    display: "none",
  },
  email: {
    width: 328,
    height: 48,
  },
});

export default FormContainer;
