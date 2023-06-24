import { StatusBar } from "expo-status-bar";

import react from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, OrderDelivery, Reastaurant } from "./screens";


import Tabs from "./navigation/tabs"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Reastaurant" component={Reastaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
