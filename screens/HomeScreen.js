import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={require("../assets/Uber_logo.png")}
                />
                <GooglePlacesAutocomplete
                    styles={{
                        container: { flex: 0 },
                        textInput: { fontSize: 18 },
                    }}
                    placeholder="Were From?"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
                    debounce={1500}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
