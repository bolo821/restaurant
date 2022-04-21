/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState, useEffect} from 'react';
import {create} from "apisauce"
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Dimensions,
  Pressable,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {restaurant,search} from './data.js'
const Stack = createNativeStackNavigator();
const data= restaurant
const data1=search

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const Client_07=({navigation,route})=>{
  const [msg, setMsg] = useState('');
  const anotherFunc = (val) =>{
         setText('');
     }
  const rest =route.params.name
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    >
    <View>
    <View style={{width:'100%', height:400,  backgroundColor: "#010440",flex:1,flexDirection:"column",padding:15,paddingTop:35,alignContent:'center'}}>
      <View style={{flexDirection:"row",width:'100%',height:60,marginBottom:25}}>
        <Image source={require('./asset/Untitled-1.png')} style={{width:50,height:50,alignSelf:'center'}}></Image>
        <View style={{width:Dimensions.get('window').width-150,height:55,backgroundColor:"white",flexDirection:"row",borderRadius:7,alignItems:"center"}}>
        <TextInput value={msg} placeholder='Que necesitas?'defaultValue='' style={{width:Dimensions.get('window').width-190,height:55,backgroundColor:"white",fontSize:20,borderRadius:7,color:"#0472FF"}} 
               onChangeText={(text)=>{
                 setMsg(text); 
                 let valu= data1.find( e => e == text);
                  if(valu){
                    setMsg('')
                    navigation.navigate('profile',{name:valu});}
                  else{return 0;}
               }}>
          </TextInput>
          <AntDesign name="search1" size={20} color='#91A7B6' ></AntDesign></View>
        <Image source={require('./asset/Untitled-2.png')} style={{width:50,height:50,alignSelf:'center',borderRadius:100,marginLeft:10}}></Image>
      </View>
      <View style={{width:'100%',height:90,flexDirection:"row"}}>
        <Image source={rest.image} style={{width:90,height:90,borderRadius:100}}></Image>
        <View style={{width:60,height:60,alignItems:'center',flex:1}}><FontAwesome name="star" size={25} color='#0472FF'></FontAwesome><Text style={{marginTop:9,color:"#0472FF"}}>3.2</Text></View>
        <View style={{width:60,height:60,alignItems:'center',flex:1}}><FontAwesome name="bus" size={25} color='#0472FF'></FontAwesome><Text style={{marginTop:9,color:"#0472FF"}}>3.5 km</Text></View>
        <View style={{width:60,height:60,alignItems:'center',flex:1}}><AntDesign name="like2" size={25} color='#0472FF'></AntDesign><Text style={{marginTop:9,color:"#0472FF"}}>120</Text></View>
        <View style={{width:60,height:60,alignItems:'center',flex:0.4}}/>
      </View>
      <Text style={{color:"white",marginTop:10}}>Helados Sarita Americas</Text>
      <View style={{white:"100%",height:50,flexDirection:"row",marginTop:8,alignItems:"center"}}>
        <Image source={require('./asset/Untitled-7.png')} style={{width:50,height:50,zIndex:1}}></Image>
        <Image source={require('./asset/Untitled-6.png')} style={{width:50,height:50,zIndex:2,marginLeft:-30,borderRadius:100}}></Image>
        <Image source={require('./asset/Untitled-5.png')} style={{width:50,height:50,zIndex:3,marginLeft:-30,borderRadius:100}}></Image>
        <Image source={require('./asset/Untitled-4.png')} style={{width:50,height:50,zIndex:4,marginLeft:-25,borderRadius:100}}></Image>
        <View style={{marginLeft:10}}>
          <View style={{flexDirection:"row"}}><Text style={{color:"#0472FF"}}>Dinora, RaulcBenjamin</Text><Text style={{color:"white"}}>y mas amigos</Text></View>
          <Text style={{color:"white"}}>han recomendado este comercio.</Text>
        </View>
      </View>
      <View style={{white:"100%",height:40,marginTop:30,flexDirection:"row"}}>
      <Pressable style={{flex:3,height:40,backgroundColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center"}}><Text style={{color:"#0472FF"}}>Contacto</Text></Pressable>
      <Pressable style={{flex:2.6,height:40,backgroundColor:"white",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}><Entypo name="share" size={25} color="#0472FF"></Entypo></Pressable>
      <Pressable style={{flex:4.5,height:40,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}}>Agregar a favoritos</Text><FontAwesome name="star" size={10} color="white"></FontAwesome></Pressable>
      <Pressable style={{flex:4.5,height:40,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}}>Recomendar</Text><Entypo name="check" size={10} color="white"></Entypo></Pressable>
      </View>
    </View>
    {
      rest.description && rest.description.map((item,index)=>{
        return(
          <SafeAreaView key={index}>
          <Image source={item.image} style={{width:"100%",height:330}}></Image>
          <View style={{width:'100%', height:230,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
            <View style={{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
              <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
             <Image source={rest.image} style={{width:37,height:37,borderRadius:100}}></Image>
             <Text style={{color:"#12121284",marginLeft:10}}>24/12/2020 a las 09:00</Text> 
             </View>                    
              <View style={{flexDirection:"row"}}>
                 <Text style={{color:"black",fontSize:20,alignSelf:"center"}}>120</Text>
                <AntDesign name="like1" size={30} color='#00078950' style={{marginLeft:5}}></AntDesign>
                <Entypo name="share" size={30} color="#00078950" style={{marginLeft:30}}></Entypo>
              </View>
            </View>
            <Text style={{color:"black",marginTop:7,fontWeight:"bold"}}>{item.description[0]}</Text>
            <View style={{flexDirection:"row",width:"100%",height:20,alignItems:"center",marginTop:15}}><FontAwesome name="snowflake-o" size={17} color='#acdef9'></FontAwesome><Text style={{color:"black",fontSize:16,marginHorizontal:7}}>Un Giga Cafe firo por favor</Text><FontAwesome name="snowflake-o" size={17} color='#acdef9'></FontAwesome>
            </View>
            <Text style={{color:"#0472FF",fontSize:17,marginTop:15}}>{item.description[1]}</Text>
            <View style={{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style={{color:"#0472FF",}}>Escribir comentario</Text></View>
          </View>
          </SafeAreaView>
        )
      })
     }

    <View style={{width:"100%",height:80,justifyContent:"center",flexDirection:"row",backgroundColor:"white",borderTopEndRadius:7,borderTopStartRadius:7}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}><Pressable style={{height:50,width:90,borderWidth:0,borderRadius:7}} onPress={() =>navigation.navigate('favorite')}><View style={{flexDirection:"row",}}><FontAwesome name="star" size={20} color='#91A7B6'></FontAwesome><FontAwesome name="circle" size={20} color='red'style={{marginLeft:20}}></FontAwesome></View><Text style={{color:"#91A7B6",marginTop:10}}>Mis favoritos</Text></Pressable></View>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><Pressable style={{width:130,height:55,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginRight:40}} onPress={()=>navigation.navigate('start')}><FontAwesome5 name="map-marker-alt" size={20} color="white"></FontAwesome5><Text style={{color:"white",fontSize:14,marginLeft:12}}>mapa</Text></Pressable></View>
      </View>
    
      
      {/* <Section title="Learn More">
        discover what to d
      </Section>
      <LearnMoreLinks /> */}
    </View>
  </ScrollView>
  </SafeAreaView>
  )
}
const Client_2=({navigation})=>{
  const [msg, setMsg] = useState('');
  const anotherFunc = (val) =>{
         setText('');
     }
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    >
    <View>
    <View style={{width:'100%', height:102,  backgroundColor: "#E4EAF1",flex:1,flexDirection:"column",padding:15,paddingTop:35,alignContent:'center'}}>
      <View style={{flexDirection:"row",width:'100%',height:60,marginBottom:25}}>
        <Image source={require('./asset/Untitled-1.png')} style={{width:50,height:50,alignSelf:'center',borderRadius:14,marginRight:10}}></Image>
        <View style={{width:Dimensions.get('window').width-150,height:60,backgroundColor:"white",flexDirection:"row",borderRadius:7,alignItems:"center"}}>
        <TextInput value={msg} placeholder='Que necesitas?'defaultValue='' style={{width:Dimensions.get('window').width-190,height:55,backgroundColor:"white",fontSize:20,borderRadius:7,color:"#0472FF"}} 
               onChangeText={(text)=>{
                 setMsg(text); 
                 let valu= data1.find( e => e == text);
                  if(valu){
                    setMsg('')
                    navigation.navigate('profile',{name:valu});}
                  else{return 0;}
               }}>
          </TextInput>
          <AntDesign name="search1" size={30} color='#91A7B6' ></AntDesign></View>
        <Image source={require('./asset/Untitled-2.png')} style={{width:50,height:50,alignSelf:'center',borderRadius:100,marginLeft:10}}></Image>
      </View>
      
    </View>
    <Image source={require('./asset/Untitled-10.png')} style={{width:"100%",height:330}}></Image>
    <View style={{width:'100%', height:300,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
      <View style={{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
        <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
      <Image source={require('./asset/Untitled-3.png')} style={{width:37,height:37,borderRadius:100}}></Image>
      <Text style={{color:"#12121284",marginLeft:10}}>24/12/2020 a las 09:00</Text> 
      </View>                    
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"black",fontSize:20,alignSelf:"center"}}>120</Text>
          <AntDesign name="like1" size={30} color='#00078950' style={{marginLeft:5}}></AntDesign>
          <Entypo name="share" size={30} color="#00078950" style={{marginLeft:30}}></Entypo>
        </View>
      </View>
      <Text style={{color:"black",marginTop:7,fontWeight:"bold"}}>Promocion del mes</Text>
      <View style={{flexDirection:"row",width:"100%",height:40,alignItems:"center",marginTop:10}}><Text style={{color:"black",fontSize:16.5}}>En la compra de tu banana split te regalamos una bola extra de helado</Text>
      </View>
      <View style={{width:"100%",height:70,alignItems:"center",flexDirection:"row"}}>
      <Image source={require('./asset/Untitled-7.png')} style={{width:37,height:37,borderRadius:100,zIndex:1}}></Image>
      <Image source={require('./asset/Untitled-4.png')} style={{width:37,height:37,borderRadius:100,zIndex:2,marginLeft:-20}}></Image>
      <Text style={{color:"#0472FF"}}>  Dinora y Raul</Text><Text style={{color:"black"}}> han recomendado esto</Text>
      </View>
      <Text style={{color:"#0472FF",fontSize:17,marginTop:10}}>Ver log 4 comentarios</Text>
      <View style={{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style={{color:"#0472FF",}}>Escribir comentario</Text></View>
    </View>
    <Image source={require('./asset/Untitled-14.png')} style={{width:"100%",height:330}}></Image>
    <View style={{width:'100%', height:300,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
      <View style={{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
        <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
      <Image source={require('./asset/Untitled-11.png')} style={{width:37,height:37,borderRadius:100}}></Image>
      <Text style={{color:"#12121284",marginLeft:10}}>14/12/2020 a las 09:00</Text> 
      </View>                    
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"black",fontSize:20,alignSelf:"center"}}>120</Text>
          <AntDesign name="like1" size={30} color='#00078950' style={{marginLeft:5}}></AntDesign>
          <Entypo name="share" size={30} color="#00078950" style={{marginLeft:30}}></Entypo>
        </View>
      </View>
      <Text style={{color:"black",marginTop:7,fontWeight:"bold"}}>Bacon Burger</Text>
      <View style={{flexDirection:"row",width:"100%",height:40,alignItems:"center",marginTop:10}}><Text style={{color:"black",fontSize:16.5}}>Amas el tocino? Prueda nuestra Bacon Burger y veras que nunca querras irte de Burger King.😍</Text>
      </View>
      <View style={{width:"100%",height:70,alignItems:"center",flexDirection:"row"}}>
      <Image source={require('./asset/Untitled-13.png')} style={{width:37,height:37,borderRadius:100,zIndex:1}}></Image>
      <Image source={require('./asset/Untitled-12.png')} style={{width:37,height:37,borderRadius:100,zIndex:2,marginLeft:-20}}></Image>
      <Text style={{color:"#0472FF"}}>  Dinora y Raul</Text><Text style={{color:"black"}}> han recomendado esto</Text>
      </View>
      <Text style={{color:"#0472FF",fontSize:17,marginTop:10}}>Ver log 15 comentarios</Text>
      <View style={{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style={{color:"#0472FF",}}>Escribir comentario</Text></View>
    </View>
    <Image source={require('./asset/Untitled-8.png')} style={{width:"100%",height:330}}></Image>
    <View style={{width:'100%', height:230,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
      <View style={{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
        <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
      <Image source={require('./asset/Untitled-3.png')} style={{width:37,height:37,borderRadius:100}}></Image>
      <Text style={{color:"#12121284",marginLeft:10}}>24/12/2020 a las 09:00</Text> 
      </View>                    
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"black",fontSize:20,alignSelf:"center"}}>120</Text>
          <AntDesign name="like1" size={30} color='#00078950' style={{marginLeft:5}}></AntDesign>
          <Entypo name="share" size={30} color="#00078950" style={{marginLeft:30}}></Entypo>
        </View>
      </View>
      <Text style={{color:"black",marginTop:7,fontWeight:"bold"}}>Cafes Bajo Cero</Text>
      <View style={{flexDirection:"row",width:"100%",height:20,alignItems:"center",marginTop:15}}><FontAwesome name="snowflake-o" size={17} color='#acdef9'></FontAwesome><Text style={{color:"black",fontSize:16,marginHorizontal:7}}>Un Giga Cafe firo por favor</Text><FontAwesome name="snowflake-o" size={17} color='#acdef9'></FontAwesome>
      </View>
      <Text style={{color:"#0472FF",fontSize:17,marginTop:15}}>Ver log 5 comentarios</Text>
      <View style={{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style={{color:"#0472FF",}}>Escribir comentario</Text></View>
    </View>
    <Image source={require('./asset/Untitled-10.png')} style={{width:"100%",height:330}}></Image>
    <View style={{width:'100%', height:230,backgroundColor:"white",flex:1,flexDirection:"column",padding:14,paddingTop:23,alignContent:'center'}}>
      <View style={{width:"100%",height:37,flexDirection:"row",alignItems:"center"}}>
        <View style={{flexDirection:"row",flex:2,alignItems:"center"}}>
      <Image source={require('./asset/Untitled-3.png')} style={{width:37,height:37,borderRadius:100}}></Image>
      <Text style={{color:"#12121284",marginLeft:10}}>24/12/2020 a las 09:00</Text> 
      </View>                    
        <View style={{flexDirection:"row"}}>
          <Text style={{color:"black",fontSize:20,alignSelf:"center"}}>120</Text>
          <AntDesign name="like1" size={30} color='#00078950' style={{marginLeft:5}}></AntDesign>
          <Entypo name="share" size={30} color="#00078950" style={{marginLeft:30}}></Entypo>
        </View>
      </View>
      <Text style={{color:"black",marginTop:7,fontWeight:"bold"}}>Promocion del mes</Text>
      <View style={{flexDirection:"row",width:"100%",height:40,alignItems:"center",marginTop:10}}><Text style={{color:"black",fontSize:16.5}}>En la compra de tu banana split te regalamos una bola extra de helado</Text>
      </View>
      <Text style={{color:"#0472FF",fontSize:17,marginTop:10}}>Ver log 5 comentarios</Text>
      <View style={{width:"100%",height:60,backgroundColor:"#01044006",justifyContent:"center",paddingLeft:20,marginLeft:-14}}><Text style={{color:"#0472FF",}}>Escribir comentario</Text></View>
    </View>
    <View style={{width:"100%",height:80,justifyContent:"center",flexDirection:"row",backgroundColor:"white",borderTopEndRadius:7,borderTopStartRadius:7}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}><Pressable style={{height:50,width:90,borderWidth:0,borderRadius:7}} onPress={() =>navigation.navigate('favorite')}><View style={{flexDirection:"row",}}><FontAwesome name="star" size={20} color='#91A7B6'></FontAwesome><FontAwesome name="circle" size={20} color='red'style={{marginLeft:20}}></FontAwesome></View><Text style={{color:"#91A7B6",marginTop:10}}>Mis favoritos</Text></Pressable></View>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><Pressable style={{width:130,height:55,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginRight:40}} onPress={()=>navigation.navigate('start')}><FontAwesome5 name="map-marker-alt" size={20} color="white"></FontAwesome5><Text style={{color:"white",fontSize:14,marginLeft:12}}>mapa</Text></Pressable></View>
      </View>
      
      {/* <Section title="Learn More">
        discover what to d
      </Section>
      <LearnMoreLinks /> */}
    </View>
  </ScrollView>
  </SafeAreaView>
  )
}
const Client_4=({navigation,route})=>{
  const isDarkMode = useColorScheme() === 'dark';
    console.log("val",route.params.name)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
     const[restaurant,setRestaurant]=useState(data);

  useEffect(()=>{
    if(route.params.name==="restaurant"){
      restaurant.sort(function(a,b){
      const aa=Math.sqrt(Math.pow((a.position[0]-0),2)+Math.pow((a.position[1]-0),2))
      const bb=Math.sqrt(Math.pow((b.position[0]-0),2)+Math.pow((b.position[1]-0),2))
      return aa-bb;});
      
    setRestaurant(restaurant)
      
    
    }
    else{
      let res = restaurant.filter(ele => {
        let resFlag = false;
        let hasFish = ele.description.find(e => e.name ===route.params.name);
        if (hasFish) resFlag = true;
        return resFlag;
     });
     setRestaurant(res)
    }

    
  },[]);
      

  return(
    <SafeAreaView>
       <ScrollView horizontal={true} style={{width:"auto",zIndex:-1}}> 
      <ScrollView showsVerticalScrollIndicator={true} style={{height:"auto"}} >
      <Image source={require('./asset/map.png')}style={{transform: [{ scale:1 }]}} ></Image>  
      </ScrollView>
      </ScrollView>
       <View style={{flexDirection:"row",width:'100%',height:60,marginBottom:25,position:"absolute",top:35,paddingLeft:15}}>
       <View style={{width:Dimensions.get('window').width-100,height:55,backgroundColor:"white",flexDirection:"row",borderRadius:7,alignItems:"center",padding:10}}><AntDesign name="arrowleft" size={20} color='#01044090' ></AntDesign><TextInput value='Restaurant' style={{width:Dimensions.get('window').width-160,height:55,backgroundColor:"white",fontSize:20,borderRadius:7,color:"#0472FF",paddingLeft:10}}></TextInput><AntDesign name="closecircle" size={20} color='#91A7B6' ></AntDesign></View>
      <Image source={require('./asset/Untitled-2.png')} style={{width:50,height:50,alignSelf:'center',borderRadius:100,marginLeft:10}}></Image>
       </View> 
      <SafeAreaView style={{position:"absolute",top:300,width:"100%",}}>
      <ScrollView showsVerticalScrollIndicator={true} style={{height:520}} >
       <View style={{width:"100%",padding:20,paddingTop:10,backgroundColor:"white",paddingBottom:50,borderTopLeftRadius:8,borderTopRightRadius:8}}>
        {
         restaurant && restaurant.map((element,index) => {
         console.log("elementposition", element.image)
        const distance=Math.sqrt(Math.pow((element.position[0]-0),2)+Math.pow((element.position[1]-0),2))
        return(
            <View style={{width:"100%",height:100,flexDirection:"row",paddingTop:5,borderBottomColor:"#01044040",borderBottomWidth:1}} key={index}>
              <View style={{flexDirection:"row", flex:5}}  >
                <Pressable onPress={()=>{navigation.navigate('restaurant',{name:element})}}><Image source={element.image}  resizeMode="cover" style={{width:90,height:90,borderRadius:5}} ></Image></Pressable>
                <View style={{paddingLeft:15}}>
                  <Text style={{color:"black",fontSize:16.2}}>{element.name}</Text>
                  <View style={{flexDirection:"row",marginTop:5}}>
                    <Entypo name='star' size={15} color='#0472FF'></Entypo><Entypo name='star' size={15} color='#0472FF'></Entypo><Entypo name='star' size={15} color='#0472FF'></Entypo><Entypo name='star-outlined' size={15} color='#12121238'></Entypo><Entypo name='star-outlined' size={15} color='#12121238'></Entypo><Text style={{color:"#0472FF",marginLeft:8}}>3.2</Text>
                  </View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Ionicons name='person' size={14} color='black'></Ionicons><Text style={{color:"black",paddingHorizontal:8}}>25</Text><Text style={{color:"#0472FF",fontSize:14}}>Recomendaciones</Text>
                  </View>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Ionicons name='ios-car-sharp' size={16} color='black'></Ionicons><Text style={{color:"black",paddingLeft:6}}>{distance} km</Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection:"row",flex:1,justifyContent:"flex-end",paddingRight:10,paddingTop:3}}>
                <Image source={require('./asset/Icon1.png')} style={{width:20,height:20,}}/>
                <AntDesign name='like1' size={20} color='#01044024' style={{marginLeft:10,}}></AntDesign>
              </View>
            </View>
            ) 
          })
        }
       </View>
       
      <View style={{width:"100%",height:70,justifyContent:"center",flexDirection:"row",backgroundColor:"white",borderTopEndRadius:7,borderTopStartRadius:7}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}><Pressable style={{height:50,width:90,borderWidth:0,borderRadius:7}} onPress={() =>navigation.navigate('favorite')}><View style={{flexDirection:"row",}}><FontAwesome name="star" size={20} color='#91A7B6'></FontAwesome><FontAwesome name="circle" size={20} color='red'style={{marginLeft:20}}></FontAwesome></View><Text style={{color:"#91A7B6",marginTop:10}}>Mis favoritos</Text></Pressable></View>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><Pressable style={{width:130,height:55,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginRight:40}} onPress={()=>navigation.navigate('start')}><FontAwesome5 name="map-marker-alt" size={20} color="white"></FontAwesome5><Text style={{color:"white",fontSize:14,marginLeft:12}}>mapa</Text></Pressable></View>
      </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaView>
  )
}

const Client_1=({ navigation })=>{
  const isDarkMode = useColorScheme() === 'dark';
  const [msg, setMsg] = useState('');
  const anotherFunc = (val) =>{
         setText('');
     }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <SafeAreaView style={{height:"100%",flexDirection:"column",flex:1}}>
     <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView horizontal={true} style={{width:"auto"}}> 
      <ScrollView showsVerticalScrollIndicator={true} style={{height:"auto"}} >
      <Image source={require('./asset/map.png')}style={{transform: [{ scale:1 }]}} ></Image>  
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
      <View style={{flexDirection:"row",width:'100%',height:60,marginBottom:25,position:"absolute",top:35}}>
        <Image source={require('./asset/Untitled-1.png')} style={{width:50,height:50,alignSelf:'center',marginLeft:15,borderRadius:7,marginRight:7}}></Image>
        <View style={{width:Dimensions.get('window').width-150,height:55,backgroundColor:"white",flexDirection:"row",borderRadius:7,alignItems:"center"}}>
          <TextInput value={msg} placeholder='Que necesitas?'defaultValue='' style={{width:Dimensions.get('window').width-190,height:55,backgroundColor:"white",fontSize:20,borderRadius:7,color:"#0472FF"}} 
               onChangeText={(text)=>{
                 setMsg(text); 
                 let valu= data1.find( e => e == text);
                  if(valu){
                    setMsg('')
                    navigation.navigate('profile',{name:valu});}
                  else{return 0;}
               }}>
          </TextInput>
          <AntDesign name="search1" size={20} color='#91A7B6' ></AntDesign>
      </View>
        <Image source={require('./asset/Untitled-2.png')} style={{width:50,height:50,alignSelf:'center',borderRadius:100,marginLeft:10}}></Image>
      
      </View>
      
      <View style={{width:"100%",height:70,justifyContent:"center",flexDirection:"row",backgroundColor:"white",borderTopEndRadius:7,borderTopStartRadius:7,position:"absolute",bottom:0}}>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:10}}><Pressable style={{height:50,width:90,borderWidth:0,borderRadius:7}} onPress={() =>navigation.navigate('favorite')}><View style={{flexDirection:"row",}}><FontAwesome name="star" size={20} color='#91A7B6'></FontAwesome><FontAwesome name="circle" size={20} color='red'style={{marginLeft:20}}></FontAwesome></View><Text style={{color:"#91A7B6",marginTop:10}}>Mis favoritos</Text></Pressable></View>
        <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}><Pressable style={{width:130,height:55,backgroundColor:"#0472FF",borderRadius:10,marginLeft:10,justifyContent:"center",alignItems:"center",flexDirection:"row",marginRight:40}} onPress={()=>navigation.navigate('start')}><FontAwesome5 name="map-marker-alt" size={20} color="white"></FontAwesome5><Text style={{color:"white",fontSize:14,marginLeft:12}}>mapa</Text></Pressable></View>
      </View>
    
    </SafeAreaView>
  )
}
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="start"
        component={Client_1}
        
      />
      <Stack.Screen name="favorite" component={Client_2} />
      <Stack.Screen name="profile" component={Client_4} />
      <Stack.Screen name="restaurant" component={Client_07} />
    </Stack.Navigator>
  </NavigationContainer>

    
  
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;

