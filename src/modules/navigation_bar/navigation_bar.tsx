import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


type StockStackParamList = {
    Estoque: undefined;
    Details: { itemId: number; otherParam: string };
};

type SalesStackParamList = {
    Vendas: undefined;
    Details: { itemId: number; otherParam: string };
};
  
type StockNavigationProp = StackNavigationProp<StockStackParamList, "Estoque">;

type SalesNavigationProp = StackNavigationProp<SalesStackParamList, "Vendas">;

const NavigationBar = (): React.JSX.Element => {

    const stockNavigation = useNavigation<StockNavigationProp>();

    const salesNavigation = useNavigation<SalesNavigationProp>();

    return (
        <View style={{
            width: "100%",
            height: 50,
            backgroundColor: "rgba(10, 10, 10, 1)",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
        }}>
            <TouchableOpacity
                onPress={() => {
                    stockNavigation.navigate("Estoque");
                }}
                style={{
                    width: "50%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>
                    Estoque
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    salesNavigation.navigate("Vendas");
                }}
                style={{
                    width: "50%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>
                    Vendas
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default NavigationBar;
