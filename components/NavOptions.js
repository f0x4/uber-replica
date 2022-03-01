import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const navItems = [
    {
        id: "000",
        title: "Get a ride",
        image: require("../assets/car.webp"),
        screen: "MapScrren",
    },
    {
        id: "001",
        title: "Order food",
        image: require("../assets/food.png"),
        screen: "EatsScrren",
    },
];

const NavOptions = () => {
    return (
        <FlatList
            data={navItems}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
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
                        </View>
                        <Text style={tw`mt-2 text-lg font-semibold`}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default NavOptions;
