import React from "react";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../components/Home";

const HomeScreen = () => {
  return <Home />;
};

const IoniconsHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />
);

HomeScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Groups",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="Profile"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default HomeScreen;
