import * as React from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import { Searchbar, Card, FAB } from 'react-native-paper';
import {AddressAlert}  from '../ModalAndAlerts/AddressAlert'
import {AddressModal} from '../ModalAndAlerts/AddressModal'

function RestaurantSelectScreen({navigation}) {

  const restaurantData= [
    {
      name:"Davey's on Essex",
      estimatedDelivery:"15-25min"
    },
    {
      name: "Maddeline's Diner",
      estimatedDelivery:"30-40min"
    },
    {
      name:"Arthur's Fish and Chips",
      estimatedDelivery:"20-30min"
    },
    {
      name:"Fishing Hole",
      estimatedDelivery:"60-70min"
    },
    {
      name:"Corner Stop Delicatessen",
      estimatedDelivery:"30-40min"
    },
    {
      name:"Andrew's Pub",
      estimatedDelivery:"25-40min"
    },
    {
      name:"Captain Hook's",
      estimatedDelivery:"15-25min"
    },
    {
      name:"Cody & Co.",
      estimatedDelivery:"50-60min"
    },
    {
      name:"7th Heaven",
      estimatedDelivery:"55-65min"
    },
    {
      name:"Salty Spitoon",
      estimatedDelivery:"45-55min"
    }
  ]

  let addressObject= {
    line1: null,
    line2:null,
    zip:null,
    province: null,
    country: null
  }

  const [searchTerm,setSearchTerm] = React.useState("");
  const [filtered,setFilteredRestaurants] = React.useState(restaurantData);
  const [addressEntered,setAddressEntered] = React.useState(false);
  const [address,setAddress] = React.useState(addressObject);
  const [addressAlertVisible,setAddressAlertVisible] = React.useState(false);
  const [addressModalVisible,setAddressModalVisible] = React.useState(false);


  function filterResults(term){
    setSearchTerm(term);
    let filtered = restaurantData.filter(restaurant=>restaurant.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredRestaurants(filtered);
  }

  function showRestaurants(){
    return filtered.map((restaurant,i)=>
    <Card 
      key={i}
      style={{margin:15}}
      onPress={()=>{goToRestaurantPage(restaurant)}}
      >
      <Card.Title title= {restaurant.name} subtitle={restaurant.estimatedDelivery}/>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    </Card>
    );
  }

  function goToRestaurantPage(restaurantData){
    if(addressEntered === true){
      navigation.navigate('RestaurantDetail',{
        restaurant: restaurantData
      });
    } else {
      setAddressAlertVisible(true);
    }
  }

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'top', paddingTop:15 ,backgroundColor:'white'}}>
        <Searchbar
          icon={{uri:"https://cdn3.iconfinder.com/data/icons/instagram-18/512/194_Instagram_Search_Sets-512.png"}}
          style={{margin:10}}
          placeholder="Search For Restaurants..."
          value={searchTerm}
          onChangeText={filterResults}
        />
        <ScrollView style={{padding:10}}>
          {showRestaurants()}
        </ScrollView>
        <FAB style={{
          margin: 16,
          left: 15,
          bottom: 30,
          backgroundColor:"#007ee6",
          position:"absolute",
          }}
          visible={!addressEntered}
          icon={{uri:"https://cdn4.iconfinder.com/data/icons/vectory-bonus-3/40/button_add-512.png"}}
          label="Add Address"
          onPress={()=>{setAddressModalVisible(true)}}
        />
        <AddressAlert 
          addressAlertVisible={addressAlertVisible} 
          setAddressAlertVisible={setAddressAlertVisible}
        />
        <AddressModal 
          addressModalVisible={addressModalVisible}  
          setAddressModalVisible={setAddressModalVisible}
          setAddressEntered={setAddressEntered}
          setAddress={setAddress}
        />
      </SafeAreaView>
    );
  }

export {RestaurantSelectScreen};
