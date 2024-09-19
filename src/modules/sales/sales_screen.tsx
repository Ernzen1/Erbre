import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import NavigationBar from '../navigation_bar/navigation_bar';


type RootStackParamList = {
    Estoque: undefined;
    Details: { itemId: number; otherParam: string };
  };
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Estoque">;

const SalesScreen = (): React.JSX.Element => {

    const navigation = useNavigation<StockScreenNavigationProp>();

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
            }}>
                
            </View>
            <NavigationBar/>
        </SafeAreaView>
    );
}

export default SalesScreen;
