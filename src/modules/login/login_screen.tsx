import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import logo from "../../assets/logo.json"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


type RootStackParamList = {
    Estoque: undefined;
    Details: { itemId: number; otherParam: string };
  };
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Estoque">;

const LoginScreen = (): React.JSX.Element => {

    const navigation = useNavigation<StockScreenNavigationProp>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Estoque");
        }, 1500);
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#212121",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <View style={{
                width: "80%",
                height: "60%",
                backgroundColor: "lightgray",
                borderRadius: 25,
            }}>
                
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
