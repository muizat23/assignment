import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


const loginData = [
  {
      id: 1,
      name: "Enter your Name",
      avatar: 'https://img.icons8.com/?size=100&id=7847&format=png&color=000000'
  },  
]

const Welcome = () => {
  return (
    <View style={styles.page}>
      <View>
      <Text style={{fontSize:30, fontWeight:'bold', color:'black', paddingBottom:15}}>Welcome</Text>
      <Text style={{fontSize:24}}>By creating an account, you can start a new one with Quizzly.</Text>
      </View>

      <FlatList
            data={loginData}
           renderItem={({item})=>{
            return(
              <View>
                <Image source={{uri:'item.avatar'}} style={{width:70, height:70}} />
              </View>

            )
           }}
      />


    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  page:{
    flex:1,
    paddingTop:100,
    // backgroundColor:'red'
  }
})