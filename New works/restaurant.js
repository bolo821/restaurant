import React,{useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, Dimensions, Pressable,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {db} from './utils/firebase'
import {ref, child, set, onChildChanged} from "firebase/database";

const Client_07 = ( {navigation, route }) => { 
   const data = route.params.data
   const data1 = data.search
   const User = data.User
   const [ msg, setMsg ] = useState('');

   const [rest, setRest] = useState(route.params.value);

   const [restuser,setRestuser] = useState([]);

   const [likenumber, setLikenumber] = useState(0);

   useEffect(() => {
      let resArr = [];
      for (let i=0; i<rest.description.length; i++) {
         for (let j=0; j<rest.description[i].recommender.length; j++) {
             let user = User.find( e => { return e.name === rest.description[i].recommender[j]})
            if (user && !resArr.includes(user)){
               resArr.push(user)
            }          
         }
      }
      setRestuser(resArr)
      let num = 0
      for (let i=0; i<rest.description.length; i++) {
          num = num + rest.description[i].recommender.length-1
      }
      setLikenumber(num)
   },[])
   console.log("number",likenumber)
   const distance = Math.sqrt(Math.pow((rest.position[0]-0), 2)+Math.pow((rest.position[1]-0), 2)).toFixed(1);
   return (
      <SafeAreaView>       
         <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View>
               <View style={{ width: '100%', height: 400, backgroundColor: "#010440", flex: 1, flexDirection: "column", padding: 15, paddingTop: 35, alignContent: 'center' }}>
                  <View style={{ flexDirection: "row", width: '100%', height: 60, marginBottom: 25 }}>
                     <Image source={ require('./asset/Untitled-1.png')} style={{width: 50, height: 50, alignSelf: 'center' }}></Image>
                     <View style={{ width: Dimensions.get('window').width - 150, height: 55, backgroundColor: "white", flexDirection: "row", borderRadius: 7, alignItems: "center" }}>
                     <TextInput value = {msg} placeholder = 'Que necesitas?' defaultValue = '' style = {{ width: Dimensions.get('window').width - 190, height: 55, backgroundColor: "white", fontSize: 20, borderRadius: 7, color: "#0472FF" }} 
                           onChangeText = { (text) => {
                              setMsg(text); 
                              let valu = data1.find( e => e === text);
                              if(valu){
                                 setMsg('')
                                 navigation.navigate( 'profile', {name:route.params.name, value: valu, data: data });
                              }
                              else{
                                 return 0;
                              }
                           }}>
                     </TextInput>
                     <AntDesign name = "search1" size = {20} color = '#91A7B6' ></AntDesign></View>
                     <Image source = {{uri:route.params.name.image}} style = {{width:50,height:50,alignSelf:'center',borderRadius:100,marginLeft:10}}></Image>
                  </View>
                  <View style = {{width:'100%',height:90,flexDirection:"row"}}>
                     <Image source = {{uri:rest.image}} style = {{width:90,height:90,borderRadius:100}}></Image>
                     <View style = {{width:60,height:60,alignItems:'center',flex:1}}>
                        <FontAwesome name = "star" size = {25} color = '#0472FF'></FontAwesome>
                        <Text style = {{marginTop:9,color:"#0472FF"}}>{rest.recommender.length}</Text>
                     </View>
                     <View style = {{width:60,height:60,alignItems:'center',flex:1}}>
                        <FontAwesome name = "bus" size = {25} color = '#0472FF'></FontAwesome>
                        <Text style = {{marginTop:9,color:"#0472FF"}}>{distance} km</Text>
                     </View>
                     <View style = {{width:60,height:60,alignItems:'center',flex:1}}>
                        <AntDesign name = "like2" size = {25} color = '#0472FF'></AntDesign>
                        <Text style = {{marginTop:9,color:"#0472FF"}}>{likenumber}</Text>
                     </View>
                     <View style = {{width:60,height:60,alignItems:'center',flex:0.4}}/>
                  </View>
                  <Text style = {{color:"white",marginTop:10}}>Helados Sarita Americas</Text>
                  <View style = {{white:"100%",height:50,flexDirection:"row",marginTop:8,alignItems:"center"}}>
                     {
                        restuser && restuser.map( ( item, index ) => {
                           console.log("info",restuser,item)
                           const unit = (v) => {
                              if (v===0) {
                                 return 0;
                              }
                              else{
                                 return -27
                              }
                           }
                           return(
                              <Image key={index} source = {{uri:item.image}} style = {{width:50,height:50,zIndex:index,marginLeft:unit(index),borderRadius:100}}></Image>
                           )                      
                        })
                     }
                     <View style = {{marginLeft:10}}>
                        <View style = {{flexDirection:"row"}}>
                           {
                              restuser && restuser.map( ( item, index ) => {
                                 return(
                                    <Text key={index} style = {{color:"#0472FF"}}>{item.name}  </Text>
                                 )
                              })
                           }
                           
                           <Text style = {{color:"white"}}>y mas amigos</Text></View>
                        <Text style = {{color:"white"}}>han recomendado este comercio.</Text>
                     </View>
                  </View>
                  <View style = {{white:"100%",height:40,marginTop:30,flexDirection:"row"}}>
                     <Pressable style = {{flex:3,height:40,backgroundColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style = {{color:"#0472FF"}}>Contacto</Text>
                     </Pressable>
                     <Pressable style = {{flex:2.6,height:40,backgroundColor:"white",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}>
                        <Entypo name = "share" size = {25} color = "#0472FF"></Entypo>
                     </Pressable>
                     <Pressable style = {{flex:4.5,height:40,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style = {{color:"white"}}>Agregar a favoritos</Text>
                        <FontAwesome name = "star" size = {10} color = "white"></FontAwesome>
                     </Pressable>
                     <Pressable style = {{flex:4.5,height:40,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style = {{color:"white"}}>Recomendar</Text>
                        <Entypo name = "check" size = {10} color = "white"></Entypo>
                     </Pressable>
                  </View>
               </View>
               {
                  rest.description && rest.description.map(( item, index) => {
                     function like(v) {
                        if(v.includes(route.params.name.name)) {
                           return "#0472FF";
                        }
                        else {
                           return "#00078950";
                        }
                     }
                     function recommender(e) {
                        if(e.includes(route.params.name.name)){
                           let newdata = e.filter( (ele)=> {
                              let flag = false;
                              if (ele !== route.params.name.name) flag = true;
                              return flag
                           });
                           console.log("newdata",newdata)
                           set(ref(db, `data/restaurant/${rest.id - 1}/description/${item.id - 1}/recommender`),newdata);
                           let newrest = { ...rest}
                           newrest.description[index] = { ...newrest.description[index],recommender:newdata}
                           setRest(newrest); 
                           setLikenumber(likenumber-1)
                        }
                        else {
                           e.push(route.params.name.name);
                           console.log("e",e)
                           set(ref(db, `data/restaurant/${rest.id - 1}/description/${item.id - 1}/recommender`),e);
                           let newrest = { ...rest}
                           console.log("newrest1",newrest)
                           newrest.description[index] = { ...newrest.description[index],recommender:e}
                           setLikenumber(likenumber+1)
                           setRest(newrest)
                        }
                     }
                     return(
                        <SafeAreaView key = {index}>
                           <Image source  =  {{uri:item.image}} style  =  {{width:"100%",height:330}}></Image>
                           <View style = {{width:'100%', height:230,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
                              <View style = {{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
                                 <View style = {{flexDirection:"row",flex:2,alignItems:"center"}}>
                                    <Image source = {{uri:rest.image}} style = {{width:37,height:37,borderRadius:100}}></Image>
                                    <Text style = {{color:"#12121284",marginLeft:10}}>24/12/2020 a las 09:00</Text> 
                                 </View>                    
                                 <View style = {{flexDirection:"row"}}>
                                    <Text style = {{color:"black",fontSize:20,alignSelf:"center"}}>{item.recommender.length-1}</Text>
                                    <Pressable 
                                       onPress={() => recommender(item.recommender)}
                                    >
                                       <AntDesign name = "like1" size = {30} color = {like(item.recommender)} style = {{marginLeft:5}}>
                                       </AntDesign>
                                    </Pressable>
                                    <Entypo name = "share" size = {30} color = "#00078950" style = {{marginLeft:30}}></Entypo>
                                 </View>
                              </View>
                              <Text style = {{color:"black",marginTop:7,fontWeight:"bold"}}>{item.description[0]}</Text>
                                 <View style = {{flexDirection:"row",width:"100%",height:20,alignItems:"center",marginTop:15}}><FontAwesome name = "snowflake-o" size = {17} color = '#acdef9'></FontAwesome><Text style = {{color:"black",fontSize:16,marginHorizontal:7}}>Un Giga Cafe firo por favor</Text><FontAwesome name = "snowflake-o" size = {17} color = '#acdef9'></FontAwesome>
                                 </View>
                                 <Text style = {{color:"#0472FF",fontSize:17,marginTop:15}}>{item.description[1]}</Text>
                                 <View style = {{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style = {{color:"#0472FF",}}>Escribir comentario</Text></View>
                           </View>
                        </SafeAreaView>
                     )
                  })
               }
         
               <View style = {{width:"100%",height:80,justifyContent:"center",flexDirection:"row",backgroundColor:"white",borderTopEndRadius:7,borderTopStartRadius:7}}>
                  <View style = {{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}>
                     <Pressable style = {{height:50,width:90,borderWidth:0,borderRadius:7}} onPress = {() => navigation.navigate('favorite',{name:route.params.name, data: data})}>
                        <View style = {{flexDirection:"row",}}>
                           <FontAwesome name = "star" size = {20} color = '#91A7B6'></FontAwesome>
                           <FontAwesome name = "circle" size = {20} color = 'red'style = {{marginLeft:20}}></FontAwesome>
                        </View>
                        <Text style = {{color:"#91A7B6",marginTop:10}}>Mis favoritos</Text>
                     </Pressable>
                  </View>
                  <View style = {{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                     <Pressable style = {{width:130,height:55,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginRight:40}} onPress = {() => navigation.navigate('start')}>
                        <FontAwesome5 name = "map-marker-alt" size = {20} color = "white"></FontAwesome5>
                        <Text style = {{color:"white",fontSize:14,marginLeft:12}}>mapa</Text>
                     </Pressable>
                  </View>
               </View>
            
            </View>
         </ScrollView>
      </SafeAreaView>
   )
 };

 export default Client_07;