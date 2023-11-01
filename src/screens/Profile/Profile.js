import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Perfil = () => {

  return (
    <SafeAreaView style = {styles.container}>
      <Header/>
      <View style = {{...styles.gridRow, flexDirection:'row'}}>
        <Text style = {{fontSize:20}}>Perfil</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    gridColumn: {
        flex:1,
        alignItems: 'center'
    },
    gridRow: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    gridButton: {
        width: WIDTH*.4,
        height: WIDTH*.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation:3
    },
    buttonTitle: {
        fontSize: 18,
        color: 'white',
        fontWeight:'500',
        elevation:3

    },
    container: {
        flex:1,
        height:'100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgb(220, 220, 220)'
    }
});

export default Perfil;