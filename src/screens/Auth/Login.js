import React, {useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/header';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button } from '@rneui/themed';
import { useDispatch } from 'react-redux/es/exports';
import { appActions } from '../../redux/appRedux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [pw, setPW] = useState("")

  handlerChangeEmail = (value) => {
    console.log(value)
    setEmail(value)
  }

  handlerChangePW = (value) =>  {
    setPW(value)

  }

  handlePress = () =>  {
    const userEmail = email;
    dispatch(appActions.setToken(true))
    dispatch(appActions.setUserEmail(userEmail));

  }

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.formContainer}>
        <View>
          <TextInput
            style={styles.input}
            value = {email}
            onChangeText={value=>handlerChangeEmail(value)}
            placeholder='Email'
            keyboardType='email-address'
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            value = {pw}
            onChangeText={value=>handlerChangePW(value)}
            placeholder='Contraseña'
            secureTextEntry= {true}
          />
        </View>
      </View>
      <View>
      <Button onPress={handlePress}>
          <Text>
            Ingresar
          </Text>
        </Button>
        <Button onPress={()=>console.log('Registrarse')}>
          <Text>
            Registrarse
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    formContainer:{
      width: WIDTH,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      marginTop:'15%',

    },
    input:{
      height: 40,
      width:WIDTH*.9,
      margin:12,
      borderWidth:1,
      padding:10,
    },
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
    }
});

export default Login;