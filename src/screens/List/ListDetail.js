import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Header from '../../components/header';
import { Icon } from '@rneui/themed'
import { getPokemon } from '../../api';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Detalle = (props) => {
    const {url} = props.route.params.item
    const [abilities, setAbilities] = useState([]);
    useEffect(()=>{
        getPokemonDetail()
    }, [props])
    
    getPokemonDetail = () => {
        getPokemon(url).then(data =>{
            console.log(data.abilities)
            setAbilities(data.abilities)
        })
    }

  return (
    <SafeAreaView style = {styles.container}>
      <Header leftComponent = {(
            <View style={styles.headerRight}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={()=>props.navigation.goBack()}
                >
                <Icon type="font-awesome-5" name="arrow-left" color="white" />
                </TouchableOpacity>
            </View>
      )} />
      <View style = {{...styles.gridRow, flexDirection:'row'}}>
        <Text style = {{fontSize:20}}> 
        Abilities: 
        {abilities.map((ability, index) => (
            <Text key= {index}> {ability.ability.name} </Text>
        ))} 
        </Text>
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

export default Detalle;