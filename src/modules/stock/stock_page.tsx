import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductComponent from './product_component';
import ProductModalBody from './product_modal';
import ReactNativeModal from 'react-native-modal';
import NavigationBar from '../navigation_bar/navigation_bar';


function StockPage(): React.JSX.Element {

  const [products, setProducts] = useState<{id: number, name: string, description: string}[]>([]);
  const [showProductModal, setShowProductModal] = useState(false);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
        {
          products.length > 0 ?
            <FlatList
              nestedScrollEnabled={true}
              data={products}
              showsVerticalScrollIndicator={false}
              renderItem={
                (product) => <ProductComponent name={product.item.name} description={product.item.description}/>
              }
            />
          :
          <Text style={{color: "white"}}>
            Nenhum produto cadastrado.
          </Text>
        }
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setShowProductModal(true);
        }}
      >
        <Icon
          name="add"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <NavigationBar/>
      <ReactNativeModal
        isVisible={showProductModal}
        onBackdropPress={() => setShowProductModal(false)}
      >
        <ProductModalBody
          newProductCallback={(name: string, description: string,) => {
              setProducts(
              [
                ...products,
                {
                  id: products.length - 1,
                  name: name,
                  description: description,
                }
              ]
            );
            setShowProductModal(false);
          }}
        />
      </ReactNativeModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
      flex: 1,
      backgroundColor: "#212121",
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "lightgray",
    borderRadius: 40,
    right: 10,
    bottom: 60,
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
    color: "black",
    fontSize: 24,
  },
});

export default StockPage;
