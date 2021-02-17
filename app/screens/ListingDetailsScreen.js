import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>100$</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/john.jpg")}
            title="John Emad"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
