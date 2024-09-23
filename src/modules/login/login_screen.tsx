import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
    Alert,
  PermissionsAndroid,
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
    Estoque: undefined;
    Details: { itemId: number; otherParam: string };
};
  
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, "Estoque">;

const LoginScreen = (props: any) : React.JSX.Element => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<StockScreenNavigationProp>();

    useEffect(() => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
    }, []);

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
                value={email}
                onChangeText={text => {
                    setEmail(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
                }}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="black"
                value={password}
                onChangeText={text => {
                    setPassword(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
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
                        navigation.replace("Estoque");
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function createAccount() {
        if (name == undefined || name.length < 3) {
            Alert.alert("O nome precisa ter pelo menos 3 letras.");
            return;
        }

        if (email == undefined || email.length < 10) {
            Alert.alert("É necessário inserir um email válido");
            return;
        }

        if (password == undefined || password.length < 8) {
            Alert.alert("Sua senha precisa ter pelo menos 8 caracteres.");
            return;
        }

        if (password != confirmPassword) {
            Alert.alert("A senha precisa ser igual em ambos os campos.");
            return;
        }

        Alert.alert("Conta criada com sucesso!");
    }

    return (
        <View style={{
            width: "80%",
            height: 500,
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
                placeholder="Nome"
                placeholderTextColor="black"
                value={name}
                onChangeText={text => {
                    setName(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
                }}
            />

            <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                value={email}
                onChangeText={text => {
                    setEmail(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
                }}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="black"
                secureTextEntry={true}
                value={password}
                onChangeText={text => {
                    setPassword(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
                }}
            />

            <TextInput
                placeholder="Confirmar senha"
                placeholderTextColor="black"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={text => {
                    setConfirmPassword(text);
                }}
                style={{
                    width: "70%",
                    height: 50,
                    backgroundColor: "white",
                    borderRadius: 15,
                    color: "black",
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
                        createAccount();
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
