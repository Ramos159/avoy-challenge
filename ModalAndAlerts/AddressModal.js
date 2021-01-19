import * as React from 'react';
import { 
	View, 
	SafeAreaView, 
	Modal, 
	TextInput, 
	Button, 
	Text
} from 'react-native';

function AddressModal({addressModalVisible,setAddressModalVisible, setAddress,setAddressEntered}){

	const [addressLine1,setAddress1] = React.useState('');
	const [addressLine2,setAddress2] = React.useState('');
	const [zipcode,setZipcode] = React.useState('');
	const [city,setCity] = React.useState('');
	const [country,setCountry] = React.useState('');
  const [specialInstructions,setSpecialInstructions] = React.useState("")

	function submitForm(){
		let object = {}
		object.addressLine1 = addressLine1;
		object.addressLine2 = addressLine2;
		object.zipcode = zipcode;
		object.city = city;
		object.country = country;
    object.specialInstructions = specialInstructions;

		setAddress(object);
		setAddressEntered(true);
		setAddressModalVisible(false);
	}

  return(
		<Modal 
			visible={addressModalVisible} 
			onRequestClose={()=>{setAddressModalVisible(false)}}
			animationType="slide"
			transparent={false}
		>
			<SafeAreaView style={{width:400,height:600,backgroundColor:"white", marginLeft:15}}>
      	<Text style={{fontWeight:"bold", fontSize:30, paddingLeft:15, paddingTop:15,paddingBottom:40}}>Add Address</Text>
				<TextInput
          maxLength={20}
					style={{fontSize:20,paddingLeft:15,paddingBottom:15}}
					placeholder="Address Line 1"
					label="Address Line 1"
					value={addressLine1}
					onChangeText={text=>{setAddress1(text)}}
				/>
				<TextInput
          maxLength={20}
					style={{fontSize:20,paddingLeft:15,paddingBottom:15}}
					placeholder="Address Line 2"
					label="Address Line 2"
					value={addressLine2}
					onChangeText={text=>{setAddress2(text)}}
				/>
				<TextInput
          maxLength={20}
					style={{fontSize:20,paddingLeft:15,paddingBottom:15}}
					placeholder="Zipcode"
					label="Zipcode"
					value={zipcode}
					onChangeText={text=>{setZipcode(text)}}
				/>
				<TextInput
          maxLength={20}
					style={{fontSize:20,paddingLeft:15,paddingBottom:15}}
					placeholder="City"
					label="City"
					value={city}
					onChangeText={text=>{setCity(text)}}
				/>
				<TextInput
          maxLength={20}
					style={{fontSize:20,paddingLeft:15,paddingBottom:40}}
					placeholder="Country"
					label="Country"
					value={country}
					onChangeText={text=>{setCountry(text)}}
				/>
        <TextInput
          maxLength={50}
					style={{fontSize:20,paddingLeft:15,paddingBottom:40}}
					placeholder="Special Instructions"
					label="Special Instructions"
					value={specialInstructions}
					onChangeText={text=>{setSpecialInstructions(text)}}
				/>
				<View style={{flexDirection: 'row',justifyContent: 'space-between', width:330, paddingLeft:5}}>
        	<Button
        	  title="Go Back"
        	  onPress={()=>{setAddressModalVisible(false)}}
        	/>
        	<Button
        	  title="Add"
        	  onPress={()=>{submitForm()}}
        	/>
      </View>
			</SafeAreaView>	
    </Modal>
  );
}

export { AddressModal }
