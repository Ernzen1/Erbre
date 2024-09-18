import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';


function ProductComponent(props: any): React.JSX.Element {
  return (
    <View style={{
        width: "85%",
        marginVertical: 5,
        aspectRatio: 1,
        backgroundColor: "lightgray",
        opacity: .5,
        alignSelf: "center",
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    }}>
        <View style={{
            width: "100%",
            height: "60%",
            backgroundColor: "lightgray",
            opacity: .5,
        }}>

        </View>
        <View style={{
            width: "100%",
            height: "30%",
            backgroundColor: "lightgray",
        }}>
            <Text style={{
                color: "black",
            }}>
                {props.name}
            </Text>
        </View>
    </View>
  );
}

export default ProductComponent;
