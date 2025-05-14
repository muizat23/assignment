import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'



const storiesData = [
  {
      id: 1,
      name: "Personal Data",
      avatar: 'https://img.icons8.com/?size=100&id=528&format=png&color=000000'
  },  
  
    {
      id: 2,
      name: "Settings",
      avatar: 'https://img.icons8.com/?size=100&id=2969&format=png&color=000000'
    },
    
    {
      id: 3,
      name: "E-statement",
      avatar: 'https://img.icons8.com/?size=100&id=Xkpq9T3HeWQS&format=png&color=000000'
    },
    {
      id: 4,
      name: "Referal Code",
      avatar: 'https://img.icons8.com/?size=100&id=19410&format=png&color=000000'
    },
    {
      id: 5,
      name: "FAQS",
      avatar: 'https://image.shutterstock.com/image-vector/three-dots-icon-260nw-703784854.jpg'
    },
    {
      id: 6,
      name: "Our Handbook",
      avatar: 'https://img.icons8.com/?size=100&id=111452&format=png&color=000000'
    },
    {
      id: 7,
      name: "Community",
      avatar: 'https://img.icons8.com/?size=100&id=102261&format=png&color=000000'
    },
   
    
]
const _layout = () => {
  
  return (
    <View style={styles.page}>
      <View style={styles.container}>
      <Image
      source={{uri:'https://img.freepik.com/free-photo/bearded-man-white-t-shirt-straw-hat_273609-11875.jpg?ga=GA1.1.600581235.1746617116&semt=ais_hybrid&w=740'}}
      style={{height:55, width:55, borderRadius:8}}/>
      <View style={{marginLeft:15,marginTop:5 }}>
      <Text style={{fontSize:20, fontWeight:'bold',paddingBottom:8}}>William John Malik</Text>
      <Text style={{fontSize:15,}}>Agressive Investor</Text></View>
      </View>
      <View style={{marginVertical:20,height:1, width:360, backgroundColor:'#EDEADE', }}></View>
     
      
      <FlatList
      data={storiesData}
     renderItem={({item})=>{
        return(
          <View style={styles.list}>
            <View style={styles.every}>
            <View style={{backgroundColor:'#F0F8FF', width:30, height:30, justifyContent:'center', borderRadius:6,}}>
              <Image source={{uri: item.avatar}}
              style={{height:23, width:24,alignSelf:'center', }} /></View>
              <View style={{alignSelf:'center', marginLeft:25}}>
              <Text style={{fontSize: 19, color: 'black'}}>{item.name}</Text>
              </View>
              
            </View>
            <View style={{alignSelf:'center', paddingRight:30}}>
              <Image
              source={{uri:'https://img.icons8.com/?size=100&id=5xG5QSwiae0d&format=png&color=000000'}}
              style={{height:20, width:20 }} /></View>
              
          </View>
          
        )


      } }
      />
       <View style={styles.last}>
        <View style={{justifyContent:'center'}}>
        <Image
        source={{uri:'https://img.icons8.com/?size=100&id=FtPuf5sC3AvI&format=png&color=000000'}}  style={{height:40, width:40,}} /></View>
        <View style={{justifyContent:'center',paddingLeft:20,}}>
        <Text style={{fontSize:15,color:'#4B9CD3'}}>Feel Free to Ask, We're Ready To Help</Text></View>
        </View>
     
      
    </View>
   
    
      
  )
}

export default _layout

const styles = StyleSheet.create({
  page:{
    flex:1,
    paddingTop:100,
    paddingLeft:30
    // backgroundColor:'blue'
   
  },
  container:{
    flexDirection:'row',
    marginBottom:15,
    marginLeft:8
   
  },
  list:{
    justifyContent:'space-between',
    flexDirection: 'row',
    // backgroundColor:'red',
    paddingBottom:15
    
  },
  every:{
    flexDirection:'row',
    padding:10
  },
  last:{
    flexDirection:'row',
    backgroundColor:'#E6E6FA',
    height:80,
    width:340,
    marginBottom:120,
    marginLeft:20,
    borderRadius:12,
    padding:30,
  }
})