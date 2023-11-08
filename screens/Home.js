import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela Inicial!</Text>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>App</Text>
                    <Text style={styles.titleText}>Estelar</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Nave Espacial</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Mapa Estelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                <Text style={styles.routeText}>Imagens Diárias</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      },
   container: {
   flex: 1,
  },

  titleText:{
    fontSize:35,
    fontWeight:'bold',
    color:'grey',
  },

  routeText:{
    fontSize:25,
    fontWeight:'bold',
     color:'white',
     justifyContent:'center',
     alignItems:'center'
  },

  titleBar:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
  },

  routeCard:{
    flex:0.12,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    marginLeft:30,
    marginRight:30,
    borderRadius:100,
    backgroundColor:'white',
  },
})