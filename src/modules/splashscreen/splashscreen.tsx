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
    Login: undefined;
    Details: { itemId: number; otherParam: string };
  };
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const Splashscreen = (): React.JSX.Element => {

    const navigation = useNavigation<StockScreenNavigationProp>();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login");
        }, 1500);
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <LottieView
                    style={styles.animatedLogo}
                    source={logo}
                    autoPlay
                    loop
                />
                <View style={styles.titleWrapper}>
                    <Text style={styles.mainTitle}>
                        Erbre
                    </Text>
                    <Text style={styles.subTitle}>
                        Gestão empresarial e de estoque
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D6EB7A",
    },
    mainTitle: {
        color: "white",
        fontSize: 28,
    },
    subTitle: {
        color: "white",
        fontSize: 16,
    },
    animatedLogo: {
        width: 250,
        height: 250,
    },
    titleWrapper: {
        width: 300,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#68EB70",
        borderRadius: 25,
    },
});

export default Splashscreen;
