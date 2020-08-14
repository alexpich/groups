import React from "react";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import MyGroups from "../components/MyGroups";

const MyGroupsScreen = () => {
  return <MyGroups />;
};

const IoniconsHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />
);

MyGroupsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Groups",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="My Groups"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MyGroupsScreen;
