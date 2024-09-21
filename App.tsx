/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import StockPage from './src/modules/stock/stock_page';
import Splashscreen from './src/modules/splashscreen/splashscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { NavigationProp, ParamListBase } from '@react-navigation/native';
import AuthenticationScreen from './src/modules/login/login_screen';
import ProfileScreen from './src/modules/profile/profile_screen';

declare global {
 namespace ReactNavigation {
   interface RootParamList extends ParamListBase {}
  }
}

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splashcreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="splashcreen" component={Splashscreen}/>
        <Stack.Screen name="Login" component={AuthenticationScreen}/>
        <Stack.Screen
          name="Estoque"
          component={StockPage}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#0D0D0D",
            }
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitleStyle: {
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#0D0D0D",
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
