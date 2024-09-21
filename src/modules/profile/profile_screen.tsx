import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import NavigationBar from '../navigation_bar/navigation_bar';


type StockParamList = {
    Estoque: undefined;
    Details: { itemId: number; otherParam: string };
};

type LoginParamList = {
    Login: undefined;
    Details: { itemId: number; otherParam: string };
};
  
type StockScreenNavigationProp = StackNavigationProp<StockParamList, "Estoque">;

type LoginScreenNavigationProp = StackNavigationProp<LoginParamList, "Login">;

const ProfileScreen = (): React.JSX.Element => {

    const stockNavigation = useNavigation<StockScreenNavigationProp>();

    const loginNavigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#212121",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <View style={{
                width: "80%",
                height: "60%",
                backgroundColor: "lightgray",
                borderRadius: 25,
                marginTop: 25,
            }}>
                
            </View>

            <TouchableOpacity
                onPress={() => {
                    loginNavigation.navigate("Login");
                }}
                style={{
                    width: "50%",
                    height: 50,
                    backgroundColor: "red",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{
                    color: "white",
                    fontSize: 18,
                }}>
                    Deslogar
                </Text>
            </TouchableOpacity>

            <NavigationBar/>
        </SafeAreaView>
    );
}

export default ProfileScreen;
