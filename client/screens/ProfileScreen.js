import React from "react";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../components/Profile";

const ProfileScreen = () => {
  return <Profile />;
};

const IoniconsHeaderButton = (props) => (
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />
);

ProfileScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Profile",
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

export default ProfileScreen;
