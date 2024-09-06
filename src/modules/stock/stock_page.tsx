import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


function StockPage(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.mainView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {

          }}
        >
          <Icon
            name="add"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gray",
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  mainTitle: {
      color: "white",
      fontSize: 28,
  },
  subTitle: {
      color: "white",
      fontSize: 16,
  },
  animatedLogo: {
      width: 250,
      height: 250,
  },
  titleWrapper: {
      width: 300,
      height: 80,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#68EB70",
      borderRadius: 25,
  },
  buttonIcon: {
    color: "white",
    fontSize: 24,
  },
});

export default StockPage;
