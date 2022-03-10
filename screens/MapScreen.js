import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <View>
            <Text>MapScreen</Text>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavOptions}
                        options={{
                            headerShown: false,
                        }}
                    ></Stack.Screen>
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={NavOptions}
                        options={{
                            headerShown: false,
                        }}
                    ></Stack.Screen>
                </Stack.Navigator>
            </View>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});
