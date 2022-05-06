
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Dimensions, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Client_2 = ({ navigation, route }) => {
   const data = route.params.data;
   const restaurant = data.restaurant;
   const User = data.User;
   const search = data.search;
   const [ msg, setMsg ] = useState('');
   const [ displayData, setDisplayData ] = useState([]);
   const data1 = search
   const user = route.params.name
   useEffect(() => {
      let resArr = [];

      for (let i=0; i<restaurant.length; i++) {
         for (let j=0; j<restaurant[i].description.length; j++) {
            if (restaurant[i].description[j].recommender.includes(route.params.name.name)) {
               let other = [];
               for (let k=0; k<restaurant[i].description[j].recommender.length; k++) {
                  if (restaurant[i].description[j].recommender[k] !== route.params.name.name  ) {
                     let user = User.find( e => {return e.name===restaurant[i].description[j].recommender[k]});
                     other.push(user)
                  }
               }
               resArr.push({
                  image: restaurant[i].image,
                  food: restaurant[i].description[j],
                  otherperson:other
               })
            }
         }
      }
      setDisplayData(resArr);
   }, [ ]);

   return (
      <SafeAreaView >
         <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
               <View style = {{width: '100%', height: 102,  backgroundColor: "#E4EAF1", flex: 1, flexDirection: "column", padding: 15, paddingTop: 35, alignContent: 'center' }}>
                  <View style = {{flexDirection: "row", width: '100%', height: 60, marginBottom: 25}}>
                     <Image source = {require('./asset/Untitled-1.png')} style = {{width: 50, height: 50, alignSelf: 'center', borderRadius: 14, marginRight: 10}}></Image>
                     <View style = {{width: Dimensions.get('window').width - 150, height: 60, backgroundColor: "white", flexDirection: "row", borderRadius: 7, alignItems: "center"}}>
                     <TextInput value = {msg} placeholder = 'Que necesitas?' defaultValue = '' style = {{width: Dimensions.get('window').width - 190, height: 55, backgroundColor: "white", fontSize: 20, borderRadius: 7, color: "#0472FF"}} 
                           onChangeText = { (text) => {
                              setMsg(text); 
                              let valu = data1.find( e => e === text);
                              if (valu) {
                                 setMsg('')
                                 navigation.navigate('profile', {name:route.params.name, value:valu, data: data });
                              }
                              else {
                                 return 0;
                              }
                           }}>
                     </TextInput>
                     <AntDesign name = "search1" size = {30} color = '#91A7B6' ></AntDesign></View>
                     <Image source = {{uri:route.params.name.image}} style = {{width: 50, height: 50, alignSelf: 'center', borderRadius: 100, marginLeft: 10}}></Image>
                  </View>                
               </View>

               {
                  displayData && displayData.map( (ele,index) => {
                     return (
                        <View key = {index}>
                           <Image source = {{uri:ele.food.image}} style={{width: "100%", height: 330}}></Image>
                           <View style = {{width: '100%', height: 300, backgroundColor: "white", flex: 1, flexDirection: "column", padding: 14, paddingTop: 23, alignContent: 'center'}}>
                              <View style = {{width: "100%", height: 37, flexDirection: "row", alignItems: "center"}}>
                                 <View style = {{flexDirection: "row", flex: 2, alignItems: "center"}}>
                                    <Image source = {{uri:ele.image}} style = {{width: 37,  height: 37,  borderRadius: 100}}></Image>
                                    <Text style = {{color: "#12121284",  marginLeft: 10}}>24/12/2020 a las 09:00</Text> 
                                 </View>                    
                                 <View style = {{flexDirection: "row"}}>
                                    <Text style = {{color: "black",  fontSize: 20,  alignSelf: "center"}}>{ele.food.recommender.length-1}</Text>
                                    <AntDesign name = "like1" size = {30} color = "#0472FF" style = {{marginLeft: 5}}></AntDesign>
                                    <Entypo name = "share" size = {30} color = "#00078950" style = {{marginLeft: 30}}></Entypo>
                                 </View>
                              </View>
                              <Text style = {{color: "black",  marginTop: 7,  fontWeight: "bold"}}>{ele.food.description[0]}</Text>
                              <View style = {{flexDirection: "row",  width: "100%",  height: 40,  alignItems: "center",  marginTop: 10}}>
                                 <Text style = {{color: "black",  fontSize: 16.5}}>{ele.food.description[1]}</Text>
                              </View>
                              <View style = {{width: "100%",  height: 70,  alignItems: "center",  flexDirection: "row"}}>
                                 {
                                    ele.otherperson.map((e,index) => { 
                                       function unit(num){
                                          if( num === 0 ){
                                             return 0;
                                          }
                                          else{
                                             return -19;
                                          }
                                       }
                                       return(
                                          e&&<Image key={index} source = {{uri:e.image}} style = {{width: 37,  height: 37,  borderRadius: 100,  zIndex: Number(index), marginLeft:unit(index)}}></Image>
                                       )                                       
                                    })                                 
                                 }
                                 {
                                    ele.otherperson.map((e,index) => {
                                       return(
                                          e&&<Text key={index} style = {{color: "#0472FF"}}> {e.name} </Text>
                                       )
                                    })
                                    
                                 }
                                 <Text style = {{color: "black"}}> han recomendado esto</Text>
                              </View>
                              <Text style = {{color: "#0472FF", fontSize: 17, marginTop: 10}}>Ver log 4 comentarios</Text>
                              <View style = {{width: "100%",  height: 60,  backgroundColor: "#01044006",  justifyContent: "center",  paddingLeft: 20,  marginLeft: -14}}>
                                 <Text style = {{color: "#0472FF",  }}>Escribir comentario</Text>
                              </View>
                           </View>
                        </View>
                     )
                  })
               }
               <View style = {{width: "100%",  height: 80, justifyContent: "center",  flexDirection: "row",  backgroundColor: "white",  borderTopEndRadius: 7,  borderTopStartRadius: 7}}>
                  <View style = {{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10}}><Pressable style={{height: 50,  width: 90,  borderWidth: 0,  borderRadius: 7}} onPress={ () => navigation.navigate ('favorite',{name: user, data: data})}><View style={{flexDirection: "row",  }}><FontAwesome name="star" size={20} color='#91A7B6'></FontAwesome><FontAwesome name="circle" size={20} color='red'style = {{marginLeft: 20}}></FontAwesome></View><Text style={{color: "#91A7B6",  marginTop: 10}}>Mis favoritos</Text></Pressable></View>
                  <View style = {{flex: 1, justifyContent: "center", alignItems: "flex-end"}}><Pressable style = {{width: 130,  height: 55,  backgroundColor: "#0472FF",  borderRadius: 10,  marginLeft: 10,  justifyContent: "center",  alignItems: "center",  flexDirection: "row",  marginRight: 40}} onPress={ () => navigation.navigate('start')}><FontAwesome5 name="map-marker-alt" size={20} color = "white"></FontAwesome5><Text style={{color: "white",  fontSize: 14,  marginLeft: 12}}>mapa</Text></Pressable></View>
               </View>
               
            
            </View>
         </ScrollView>
      </SafeAreaView>
   )
 }
 export default Client_2;