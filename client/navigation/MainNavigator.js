import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import DiscoverScreen from "../screens/DiscoverScreen";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyGroupsScreen from "../screens/MyGroupsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? Colors.white : "",
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const DiscoverNavigator = createStackNavigator(
  {
    Discover: DiscoverScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MyGroupsNavigator = createStackNavigator(
  {
    MyGroups: MyGroupsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MessagesNavigator = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Discover: {
    screen: DiscoverNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-search" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Messages: {
    screen: MessagesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-chatbubbles"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-person" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.white,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });

const DrawerNavigator = createDrawerNavigator({
  Home: TabNavigator,
  MyGroups: MyGroupsNavigator,
});

export default createAppContainer(DrawerNavigator);
