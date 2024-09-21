import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
            <View style={{
                height: "100%",
                aspectRatio: 1,
                backgroundColor: "rgba(100, 100, 100, 1)",
            }}>

            </View>
            
            <View style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 35,
                }}>
                    <Icon name="edit" color={"white"} size={18}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 35,
                }}>
                    <Icon name="delete" color={"white"} size={18}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 80,
                    height: 40,
                    flexDirection: "row",
                    backgroundColor: "green",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}>
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
