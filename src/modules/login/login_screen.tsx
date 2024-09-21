import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import logo from "../../assets/logo.json"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


type RootStackParamList = {
    Stock: undefined;
    Details: { itemId: number; otherParam: string };
};
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Stock">;

const LoginScreen = () : React.JSX.Element => {

    const navigation = useNavigation<StockScreenNavigationProp>();

    return (
        <View style={{
            width: "80%",
            height: 350,
            backgroundColor: "rgba(10, 10, 10, 1)",
            borderRadius: 25,
            justifyContent: "space-evenly",
            alignItems: "center",
        }}>
            <Text style={{
                color: "white",
                fontSize: 24,
            }}>
                Login
            </Text>

            <TextInput style={{
                width: "70%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 15,
            }}/>

            <TextInput style={{
                width: "70%",
                height: 50,
                backgroundColor: "white",
                borderRadius: 15,
            }}/>

            <View style={{
                width: "100%",
                height: 90,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace("Stock");
                    }}
                    style={{
                        width: "70%",
                        height: 40,
                        backgroundColor: "green",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 18,
                    }}>
                        Logar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: "70%",
                    height: 40,
                    backgroundColor: "gray",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 18,
                    }}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const RegisterScreen = () : React.JSX.Element => {
    return (
        <View style={{
            width: "80%",
            height: 350,
            backgroundColor: "rgba(10, 10, 10, 1)",
            borderRadius: 25,
        }}>
            <Text>
                
            </Text>
        </View>
    );
}

const AuthenticationScreen = (): React.JSX.Element => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#212121",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <LoginScreen/>
        </SafeAreaView>
    );
}

export default AuthenticationScreen;
