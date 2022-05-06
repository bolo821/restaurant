
import React,{useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, Image, TextInput, Dimensions, Pressable, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {db} from './utils/firebase'
import {ref, child, get} from "firebase/database";
import Geolocation from 'react-native-geolocation-service';
const Client_1 = ({ navigation }) => {
  const [ username, setUsername ] = useState("user1")
  const [ msg, setMsg ] = useState('');
  const [restaurant, setRestaurant] = useState(null);
  const [user, setUser ] = useState(null)
  const [User, setUUser] = useState(null)
  const [search, setSearch ] = useState(null)
  const [region, setRegion] = useState({
    latitude: 14.615619,
    longitude: -90.52551,
    latitudeDelta: 0.0125,
    longitudeDelta: 0.01221,
  });

  useEffect(() => {
    get(child( ref(db), `data/`)).then((snapshot) => {
  
      if (snapshot.exists()) {
        let data = snapshot.val();
        let use = data.User.find((e) => {
          return e.name === username
        })
        console.log("reading")
        setRestaurant(data.restaurant);
        setUUser(data.User)
        setUser(use);
        setSearch(data.search)        
      } else {
          console.log("No data available");
      }
    }).catch((error) => {
    console.error(error);
    });
  
      Geolocation.getCurrentPosition(
          (position) => {
            console.log("position",position);
            setRegion({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            })
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
      );
    
  },[])
  const CustomMarker = ({ coordinate, name }) => {
    console.log("www",name)
    return (
      <Marker coordinate={coordinate}  >
        <View
          style={{
            alignItems: "center",
          }}
        >
          {/* <Pin width={45} height={40}></Pin> */}
         <FontAwesome5 name='map-marker' color='white' size={40}/>
         <MaterialIcons name='restaurant' color="#0472FF" size={15} style={{position:"absolute", marginTop:8}} />
          <Text
            style={{
              color: "#0472FF",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 10,
              marginBottom:0,
            }}
          >
            {name}
          </Text>
        </View>
      </Marker>
    );
  };
  return (
    search && user && <SafeAreaView style = {{height:"100%",flexDirection:"column",flex:1}}>
        <MapView
          provider={PROVIDER_GOOGLE} 
          style={styles.map}
          customMapStyle={customStyle}
          initialRegion={region}
          zoomEnabled={true}
          showsUserLocation={true}
        >
          {
            restaurant.map((ele, index) => {
              return (
                <CustomMarker coordinate={{latitude: ele.position[0], longitude: ele.position[1]}} name ={ele.name} key={index} />
              )
            })
          }
          {/* <CustomMarker coordinate={{latitude: 14.615619, longitude: -90.52551}} />
          <CustomMarker coordinate={{latitude: 14.613619, longitude: -90.52451}} /> */}
        </MapView>
        <View style = {{flexDirection:"row",width:'100%',height:60,marginBottom:25,position:"absolute",top:35}}>
          <Image source = {require('./asset/Untitled-1.png')} style = {{width:50,height:50,alignSelf:'center',marginLeft:15,borderRadius:7,marginRight:7}}/>
          <View style = {{width:Dimensions.get('window').width-150,height:55,backgroundColor:"white",flexDirection:"row",borderRadius:7,alignItems:"center"}}>
              <TextInput value = {msg} placeholder = 'Que necesitas?'defaultValue='' 
                    style={{width:Dimensions.get('window').width-190,height:55,backgroundColor:"white",fontSize:20,borderRadius:7,color:"#0472FF"}} 
                    onChangeText = {(text) => {
                      setMsg(text); 
                      let valu = search.find( e => e === text);
                      if (valu) {
                          setMsg('')
                          navigation.navigate('profile',{name:user, value:valu, data:{restaurant, User, search, region}});}
                      else{
                          return 0;
                      }
                    }}>
              </TextInput>
              <AntDesign name = "search1" size = {20} color = '#91A7B6' ></AntDesign>
          </View>
          <Image source = {{uri:user.image}} style = {{width: 50, height: 50, alignSelf: 'center', borderRadius: 100, marginLeft: 10}}/>
        </View> 
        <View style = {{width: "100%", height: 75, justifyContent: "center", flexDirection: "row", backgroundColor: "white", borderTopEndRadius: 7, borderTopStartRadius: 7, position: "absolute", bottom: 0 }}>
          <View style = {{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10 }}>
              <Pressable style = {{ height: 50, width: 90, borderWidth: 0, borderRadius: 7 }} onPress={ () => navigation.navigate('favorite', {name: user, data:{restaurant, search, User} })}>
                <View style = {{ flexDirection: "row"}}>
                    <FontAwesome name = "star" size = {20} color = '#91A7B6'></FontAwesome>
                    <FontAwesome name = "circle" size = {20} color = 'red' style = {{ marginLeft: 20 }}></FontAwesome>
                    </View>                
                <Text style = {{color: "#91A7B6", marginTop: 10 }}>Mis favoritos</Text>
              </Pressable>
          </View>
          <View styl = {{ flex: 1, alignItems: "flex-end"}}>
              <Pressable style = {{ width: 130, height: 55, backgroundColor: "#0472FF", borderRadius: 10, marginLeft: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" ,marginRight: 40, marginTop:10 }} onPress={()=>navigation.navigate('start')}>
                <FontAwesome5 name="map-marker-alt" size={20} color="white"></FontAwesome5>
                <Text style={{color:"white",fontSize:14,marginLeft:12}}>mapa</Text>
              </Pressable>
          </View>
        </View>
    
    </SafeAreaView>
  )
 }
 const styles = StyleSheet.create({
   container: {
     ...StyleSheet.absoluteFillObject,
     height: 400,
     width: 400,
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
     ...StyleSheet.absoluteFillObject,
   },
 
  });
  const customStyle = [
   {
     elementType: 'geometry',
     stylers: [
       {
         color: '#18254a',
       },
     ],
   },
 
   {
     elementType: 'labels.text.stroke',
     stylers: [
       {
         color: '#242f3e',
       },
     ],
   },

   {
     featureType: 'poi',
     elementType: 'labels.text.fill',
     stylers: [
       {
         color: '#d59563',
       },
     ],
   },
   

   {
     featureType: 'road',
     elementType: 'geometry',
     stylers: [
       {
         color: '#273d70',
       },
     ],
   },
   {
     featureType: 'road',
     elementType: 'geometry.stroke',
     stylers: [
       {
         color: '#212a37',
       },
     ],
   },
   {
     featureType: 'road',
     elementType: 'labels.text.fill',
     stylers: [
       {
         color: '#9ca5b3',
       },
     ],
   },
  
  
  
   {
     featureType: 'water',
     elementType: 'geometry',
     stylers: [
       {
         color: '#17263c',
       },
     ],
   },
   {
     featureType: 'water',
     elementType: 'labels.text.fill',
     stylers: [
       {
         color: '#515c6d',
       },
     ],
   },
 
 ];
 export default Client_1;