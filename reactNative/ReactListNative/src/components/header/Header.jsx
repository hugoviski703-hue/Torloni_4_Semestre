import {Text, View } from "react-native";
import { HeaderStyles } from "./HeaderStyle";

export const Header = () =>{
    return(
        <View style={HeaderStyles.header}>
            <Text style={HeaderStyles.headerTitle}>React List</Text>
        </View>
    )
}