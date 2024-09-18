import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Modal,
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


function ProductModalBody(props: any): React.JSX.Element {
  return (
    <View style={{
        width: "80%",
        height: "60%",
        alignSelf: "center",
        backgroundColor: "rgba(20, 20, 20, 1)",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
    }}>
      <View style={{
        width: "100%",
        alignItems: "center",
      }}>
        <Text>
          Nome
        </Text>
        <TextInput
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "lightgray",
            borderRadius: 15,
            color: "black",
          }}
        />
      </View>

      <View style={{
        width: "100%",
        alignItems: "center",
      }}>
        <Text>
          Descrição
        </Text>
        <TextInput
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "lightgray",
            borderRadius: 15,
            color: "black",
          }}
        />
      </View>
      <TouchableOpacity style={{
        width: "80%",
        height: 50,
        backgroundColor: "lightgray",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text style={{
          color: "black",
          fontSize: 18,
        }}>
          Cadastrar produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductModalBody;
