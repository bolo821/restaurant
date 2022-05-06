
import React, {useState, useEffect} from 'react';
import { SafeAreaView,  ScrollView, Text, View, Image, TextInput, Dimensions, Pressable, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {db} from './utils/firebase'
import {ref, child, set, onChildChanged} from "firebase/database"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Client_4 = ({ navigation, route }) => {
  const [region, setRegion] = useState(route.params.data.region);
  const data = route.params.data
  const [restaurant, setRestaurant] = useState(data.restaurant)
  const user = route.params.name
  const [collect, setCollect] = useState(route.params.value)
  const distance1 = ( e) => {
    const lat1 = region.latitude;
    const lon1 = region.longitude;
    const lat2 = e[0]
    const lon2 = e[1]
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // in metres
    return d
  }
  useEffect(() => {
    if (collect === "restaurant") {
      let tempArr = [ ...restaurant ];
      tempArr.sort(function (a,  b) {
        let aa =distance1(a.position)
        let bb = distance1(b.position)
        return aa - bb;
      });  

      setRestaurants(tempArr);
    } else {
      let res = restaurants.filter( ele => {
        let resFlag = false;
        let hasFish = ele.description.find(e => e.name === route.params.value);
        if (hasFish) resFlag = true;
        return resFlag;
      });
      setRestaurants(res)
    }
  }, []);
  const CustomMarker = ({ coordinate, name }) => {
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
  const [ restaurants,  setRestaurants ] = useState(restaurant);
   return (
     <SafeAreaView style = {{height:"100%",flexDirection:"column",flex:1}}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            // mapType='terrain'
            customMapStyle={customStyle}
            initialRegion={region}
            zoomEnabled={true}
            showsUserLocation={true}
         >
           {
            restaurant.map((ele, index) => {
              console.log("name",ele.name)
              return (
                <CustomMarker coordinate={{latitude: ele.position[0], longitude: ele.position[1]}} name ={ele.name} key={index} />
              )
            })
          }
         </MapView>
        <View style = {{flexDirection: "row", width: '100%', height: 60, marginBottom: 25, position: "absolute", top: 35, paddingLeft: 15}}>
            <View style = {{width: Dimensions.get('window').width-100, height: 55, backgroundColor: "white", flexDirection: "row", borderRadius: 7, alignItems: "center", padding: 10}}>
              <AntDesign name = "arrowleft" size = {20} color = '#01044090' ></AntDesign>
              <TextInput defaultValue = 'Restaurant' style = {{width: Dimensions.get('window').width-160, height: 55, backgroundColor: "white", fontSize: 20, borderRadius: 7, color: "#0472FF", paddingLeft: 10}}></TextInput>
              <AntDesign name = "closecircle" size = {20} color = '#91A7B6' ></AntDesign>
            </View>
            <Image source = {{uri:user.image}} style = {{width: 50, height: 50, alignSelf: 'center', borderRadius: 100, marginLeft: 10}}></Image>
         </View> 
        <SafeAreaView style = {{position: "absolute", top: 300, width: "100%", }}>
          <ScrollView showsVerticalScrollIndicator = {true} style = {{height: 520}} >
            <View style = {{width: "100%", padding: 20, paddingTop: 10, backgroundColor: "white", paddingBottom: 50, borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
            {
              restaurants && restaurants.map((element, index) => {
                const distance = distance1(element.position).toFixed(1);
                function like(v) {
                  if(v.includes(route.params.name.name)) {
                     return "#0472FF";
                  }
                  else {
                     return "#00078950";
                  }
               }
               function recommender(e) {
                if (e.includes(route.params.name.name)){
                   let newdata = e.filter( (ele)=> {
                      let flag = false;
                      if (ele !== route.params.name.name) flag = true;
                      return flag
                   });
                 set(ref(db, `data/restaurant/${element.id - 1}/recommender`),newdata);                 
                   console.log(element.id)
                   let newrest = [ ...restaurants]
                   newrest[index] = { ...newrest[index],recommender:newdata}
                   setRestaurants(newrest); 
                }
                else {
                   e.push(route.params.name.name);
                   set(ref(db, `data/restaurant/${element.id - 1}/recommender`),e);
                   let newrest = [ ...restaurants]
                   console.log(element.id)
                   newrest[index] = { ...newrest[index],recommender:e}
                   setRestaurants(newrest)
                }
              }
        
                return(
                    <View style = {{width: "100%", height: 100, flexDirection: "row", paddingTop: 5, borderBottomColor: "#01044040", borderBottomWidth: 1}} key = {index}>
                      <View style = {{flexDirection: "row",  flex: 5}}  >
                        <Pressable onPress = {()=>{navigation.navigate('restaurant', {name: route.params.name, value: element, data: data})}}>
                          <Image source = {{uri:element.image}}  resizeMode = "cover" style = {{width: 90, height: 90, borderRadius: 5}} ></Image>
                        </Pressable>
                        <View style = {{paddingLeft: 15}}>
                          <Text style = {{color: "black", fontSize: 16.2}}>{element.name}</Text>
                          <View style = {{flexDirection: "row", marginTop: 5}}>
                            <Entypo name = 'star' size = {15} color = '#0472FF'></Entypo>
                            <Entypo name = 'star' size = {15} color = '#0472FF'></Entypo>
                            <Entypo name = 'star' size = {15} color = '#0472FF'></Entypo>
                            <Entypo name = 'star-outlined' size = {15} color = '#12121238'></Entypo>
                            <Entypo name = 'star-outlined' size = {15} color = '#12121238'></Entypo>
                            <Text style = {{color: "#0472FF", marginLeft: 8}}>{element.recommender.length-1}</Text>
                          </View>
                          <View style = {{flexDirection: "row", alignItems: "center"}}>
                            <Ionicons name = 'person' size = {14} color = 'black'></Ionicons>
                            <Text style = {{color: "black", paddingHorizontal: 8}}>25</Text>
                            <Text style = {{color: "#0472FF", fontSize: 14}}>Recomendaciones</Text>
                          </View>
                          <View style = {{flexDirection: "row", alignItems: "center"}}>
                              <Ionicons name = 'ios-car-sharp' size = {16} color = 'black'></Ionicons>
                              <Text style = {{color: "black", paddingLeft: 6}}>{distance} km</Text>
                          </View>
                        </View>
                      </View>
                      <View style = {{flexDirection: "row", flex: 1, justifyContent: "flex-end", paddingRight: 10, paddingTop: 3}}>
                        <Image source = {require('./asset/Icon1.png')} style = {{width: 20, height: 20, }}/>
                          <Pressable onPress={() => recommender(element.recommender)}>
                            <AntDesign name = "like1" size = {20} color = {like(element.recommender)} style = {{marginLeft: 10, }}>
                            </AntDesign>
                          </Pressable>
                        
                      </View>
                    </View>
                ); 
              })
            }
            </View>
            
            <View style = {{width: "100%", height: 70, justifyContent: "center", flexDirection: "row", backgroundColor: "white", borderTopEndRadius: 7, borderTopStartRadius: 7}}>
              <View style = {{flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10}}>
                <Pressable style = {{height: 50, width: 90, borderWidth: 0, borderRadius: 7}} onPress = {() =>navigation.navigate('favorite',{name:route.params.name, data: data})}>
                  <View style = {{flexDirection: "row", }}>
                    <FontAwesome name = "star" size = {20} color = '#91A7B6'></FontAwesome>
                    <FontAwesome name = "circle" size = {20} color = 'red'style = {{marginLeft: 20}}></FontAwesome>
                  </View>
                  <Text style = {{color: "#91A7B6", marginTop: 10}}>Mis favoritos</Text>
                </Pressable>
              </View>
              <View style = {{flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
                <Pressable style = {{width: 130, height: 55, backgroundColor: "#0472FF", borderRadius: 10, marginLeft: 10, justifyContent: "center", alignItems: "center", flexDirection: "row", marginRight: 40}} onPress = {()=>navigation.navigate('start')}>
                  <FontAwesome5 name = "map-marker-alt" size = {20} color = "white"></FontAwesome5>
                  <Text style = {{color: "white", fontSize: 14, marginLeft: 12}}>mapa</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
     </SafeAreaView>
   )
 };
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
 export default Client_4