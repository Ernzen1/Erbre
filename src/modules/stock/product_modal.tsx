import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


function ProductModalBody(props: any): React.JSX.Element {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
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
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          style={{
            width: "80%",
            height: 50,
            backgroundColor: "lightgray",
            borderRadius: 15,
            color: "black",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (props.newProductCallback) {
            props.newProductCallback(name, description);
          }
        }}
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "green",
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{
          color: "white",
          fontSize: 18,
        }}>
          Cadastrar produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductModalBody;
