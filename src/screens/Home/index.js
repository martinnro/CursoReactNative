import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert
} from 'react-native';
import Header from '../../components/header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = (props) => {

    const HandlePressHome = () => {
        Alert.alert(
            'Aviso',
            'Usted ya se encuentra en la pantalla Home.',
            [
                {
                    text: 'OK',
                },
            ],
            { cancelable: false }
        );
    }
    

    const HandlePressProfile = () => {
        console.log('Hola desde Profile')
        props.navigation.navigate("ProfileTab")
    }

    const HandlePressMap = () => {
        console.log('Hola desde Map')
        props.navigation.navigate("MapTab")
    }
    
    const HandlePressLists = () => {
        console.log('Hola desde List')
        props.navigation.navigate("ListsTab")
    }

  return (
    <SafeAreaView style = {styles.container}>
      <Header/>
        <View style = {{...styles.gridRow, flexDirection:'row'}}>
          <View style = {{...styles.gridColumn, justifyContent: 'flex-end', paddingBottom: '5%'}}>
            <Pressable style = {{...styles.gridButton, backgroundColor:'rgb(112, 128, 144)'}} onPress={HandlePressHome}>
                <Text style = {{...styles.buttonTitle}} >Home</Text>
            </Pressable>
          </View>
          <View style = {{...styles.gridColumn, justifyContent:'flex-end', paddingBottom: '5%'}}>
            <Pressable style = {{...styles.gridButton, backgroundColor:'rgb(112, 128, 144)'}} onPress={HandlePressLists}>
                <Text style = {{...styles.buttonTitle}}>Lista</Text>
            </Pressable>
          </View>
        </View>
        <View style = {{flex:1, flexDirection: 'row'}}>
            <View style = {{...styles.gridColumn, justifyContent:'flex-start', paddingTop: '5%'}}>
                <Pressable style = {{...styles.gridButton, backgroundColor:'rgb(112, 128, 144)'}} onPress={HandlePressMap}>
                    <Text style = {{...styles.buttonTitle}}>Mapas</Text>
                </Pressable>
            </View>
            <View style = {{...styles.gridColumn, justifyContent:'flex-start', paddingTop: '5%'}}>
                <Pressable style = {{...styles.gridButton, backgroundColor:'rgb(112, 128, 144)'}} onPress={HandlePressProfile}>
                    <Text style = {{...styles.buttonTitle}}>Perfil</Text>
                </Pressable>
            </View>
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
    },
    gridButton: {
        backgroundColor: '#606060',
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
        backgroundColor: 'rgb(220, 220, 220)'
    }
});

export default Home;