import React from 'react';
import {
    Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ImagePickerResponse } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


function ProductComponent(props: any): React.JSX.Element {
  return (
    <View style={{
        width: "85%",
        marginVertical: 5,
        aspectRatio: 1,
        backgroundColor: "lightgray",
        alignSelf: "center",
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    }}>
        <View style={{
            width: "100%",
            height: "60%",
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            {
                props.image && props.image.assets && props.image.assets[0].base64 ?
                <Image
                    style={{
                        height: "100%",
                        aspectRatio: 1,
                        backgroundColor: "green"
                    }}
                    source={{
                        uri: `data:image/jpeg;base64,${props.image.assets![0].base64}`,
                    }}
                />
                :
                (
                    <View style={{
                        height: "100%",
                        aspectRatio: 1,
                        backgroundColor: "lightgray",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Icon
                            name="photo"
                            color="black"
                            size={32}
                        />
                    </View>
                )
            }

            
            <View style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}>
                    <Icon name="edit" color={"white"} size={18}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.deleteCallback();
                    }}
                    style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Icon name="delete" color={"white"} size={18}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.sellCallback();
                    }}
                    style={{
                        width: 80,
                        height: 40,
                        flexDirection: "row",
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
                        Vender
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{
            width: "100%",
            height: "30%",
        }}>
            <Text style={{
                color: "black",
                fontSize: 16,
            }}>
                {props.name != "" ? props.name : "Produto sem nome"}
            </Text>
            <Text style={{
                color: "black",
                fontSize: 14,
            }}>
                {props.description != "" ? props.description : "Produto sem descrição"}
            </Text>
        </View>
    </View>
  );
}

export default ProductComponent;
