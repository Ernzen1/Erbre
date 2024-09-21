import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
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
import logo from "../../assets/logo.json"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


type RootStackParamList = {
    Stock: undefined;
    Details: { itemId: number; otherParam: string };
};
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Stock">;

const LoginScreen = (props: any) : React.JSX.Element => {

    const navigation = useNavigation<StockScreenNavigationProp>();

    return (
        <View style={{
            width: "80%",
            height: 350,
            backgroundColor: "rgba(10, 10, 10, 1)",
            borderRadius: 25,
            justifyContent: "space-evenly",
            alignItems: "center",
        }}>
            <Text style={{
                color: "white",
                fontSize: 24,
            }}>
                Login
            </Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="black"
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
            />

            <View style={{
                width: "100%",
                height: 90,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace("Stock");
                    }}
                    style={{
                        width: "70%",
                        height: 40,
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
                        Logar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.showRegister();
                    }}
                    style={{
                        width: "70%",
                        height: 40,
                        backgroundColor: "gray",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 18,
                    }}>
                        Cadastrar-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const RegisterScreen = (props: any) : React.JSX.Element => {
    return (
        <View style={{
            width: "80%",
            height: 400,
            backgroundColor: "rgba(10, 10, 10, 1)",
            borderRadius: 25,
            justifyContent: "space-evenly",
            alignItems: "center",
        }}>
            <Text style={{
                color: "white",
                fontSize: 24,
            }}>
                Cadastro
            </Text>

            <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="black"
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
            />

            <TextInput
                placeholder="Confirmar senha"
                placeholderTextColor="black"
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                }}
            />

            <View style={{
                width: "100%",
                height: 90,
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity
                    onPress={() => {
                        
                    }}
                    style={{
                        width: "70%",
                        height: 40,
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
                        Criar conta
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        props.showLogin();
                    }}
                    style={{
                        width: "70%",
                        height: 40,
                        backgroundColor: "gray",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 18,
                    }}>
                        Voltar ao login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const AuthenticationScreen = (): React.JSX.Element => {

    const [option, setOption] = useState("login");

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#212121",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {
                option == "register" ?
                <RegisterScreen showLogin={() => {setOption("login");}}/>
                :
                <LoginScreen showRegister={() => {setOption("register");}}/>
            }
        </SafeAreaView>
    );
}

export default AuthenticationScreen;
