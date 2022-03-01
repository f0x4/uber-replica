import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const navItems = [
    {
        id: "000",
        title: "Get a ride",
        image: require("../assets/car.webp"),
        screen: "MapScreen",
    },
    {
        id: "001",
        title: "Order food",
        image: require("../assets/food.png"),
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <FlatList
            data={navItems}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 pl-6 pb-7 pt-4 bg-gray-200 m-2 w-40 rounded`}
                    >
                        <View>
                            <Image
                                source={item.image}
                                style={{
                                    width: 120,
                                    height: 120,
                                    resizeMode: "contain",
                                }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>
                                {item.title}
                            </Text>
                        </View>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                        />
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default NavOptions;
