import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchCamera, CameraOptions, ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


function ProductModalBody(props: any): React.JSX.Element {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const [image, setImage] = useState('' as ImagePickerResponse);

  useEffect(() => {
    if (props.selectedProductData != undefined) {
      setName(props.selectedProductData.name);
      setDescription(props.selectedProductData.description);
      setValue(props.selectedProductData.value);
      setImage(props.selectedProductData.image);
    }
  }, []);

  return (
    <View style={{
        width: "80%",
        alignSelf: "center",
        backgroundColor: "rgba(20, 20, 20, 1)",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 20,
    }}>

      <TouchableOpacity
        onPress={async () => {
          launchCamera(
            {
              includeBase64: true,
            } as CameraOptions,
          ).then(result => {
            setImage(result);
          });
        }}
        style={{
          height: "30%",
          aspectRatio: 1,
          backgroundColor: "lightgray",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {
          image && image.assets && image.assets[0].base64 ?
          <Image
            style={{
              height: "100%",
              aspectRatio: 1,
              backgroundColor: "green"
            }}
            source={{
              uri: `data:image/jpeg;base64,${image.assets![0].base64}`,
            }}/>
          :
          <Icon
            name="photo"
            color="black"
            size={32}
          />
        }
      </TouchableOpacity>

      <View style={{
        width: "100%",
        alignItems: "center",
      }}>
        <Text style={{
          color: "white",
        }}>
          Nome
        </Text>
        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder='Camiseta azul'
          placeholderTextColor={"gray"}
          style={{
            width: "80%",
            height: 40,
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
        <Text style={{
          color: "white",
        }}>
          Descrição
        </Text>
        <TextInput
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          placeholder='Tamanho GG, pouco usada'
          placeholderTextColor={"gray"}
          style={{
            width: "80%",
            height: 40,
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
        <Text style={{
          color: "white",
        }}>
          Valor
        </Text>
        <TextInput
          value={value}
          onChangeText={(text) => {
            setValue(text);
          }}
          placeholder='R$ 50,00'
          placeholderTextColor={"gray"}
          keyboardType={"decimal-pad"}
          style={{
            width: "80%",
            height: 40,
            backgroundColor: "lightgray",
            borderRadius: 15,
            color: "black",
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          if (props.selectedProductData != undefined) {
            props.editProductCallback(props.selectedProductData.id, name, description, value, image);
          } else {
            if (props.newProductCallback) {
              props.newProductCallback(name, description, value, image);
            }
          }
        }}
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "green",
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{
          color: "white",
          fontSize: 18,
        }}>
          {props.selectedProductData != undefined ? "Confirmar alteração" : "Cadastrar produto"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProductModalBody;
