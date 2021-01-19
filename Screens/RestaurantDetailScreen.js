import * as React from 'react';
import { SafeAreaView, Button} from 'react-native';
import { useState } from 'react';
import { FAB,Text,Divider, Card, Dialog, Portal, Checkbox, } from 'react-native-paper'

function RestaurantDetailScreen({route, navigation}){
    const  {name, estimatedDelivery} = route.params.restaurant
    const dishes = [
      {
        name:"Halibut Fish & Chips",
        price:15.99
      },{
        name:"Cod Fish & Chips",
        price:17.99
      }
		]
		
		const [addonsDialogVisible,setAddonsDialogVisible] = useState(false);
		const [checked,setChecked] = useState(false);

    function showAvailableDishes(){
      return dishes.map((dish,i)=>
      <Card 
        key={i}
        style={{margin:15}}
        onPress={()=>{setAddonsDialogVisible(true)}}
        >
        <Card.Title title= {dish.name} subtitle={dish.price}/>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
        );
		}

		function SubmitOrder(){
			alert("Congrats on submitting your order! Now get out of here 😡");
		}

    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'top', paddingTop:30 ,backgroundColor:'white', alignText:'center'}}>
      	<Text style={{fontWeight:"bold", fontSize:30, paddingLeft:15, paddingTop:15}}>{name}</Text>
        <Text style={{ fontSize:15, paddingLeft:15, paddingBottom:50}}>Estimated {estimatedDelivery} Delivery</Text>
        <Text style={{fontWeight:"bold", fontSize:25, paddingLeft:15,paddingBottom:20}}>Available Dishes</Text>
        <Divider/>
        {showAvailableDishes()}
        <FAB style={{
            position:"absolute",
            margin: 16,
            left: 15,
            bottom: 30,
            backgroundColor:"#007ee6"
        }}
        icon={{uri:"https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png"}}
        onPress={()=>{navigation.goBack()}}
        />
				<Portal>
					<Dialog visible={addonsDialogVisible} onDismiss={()=>{setAddonsDialogVisible(false)}}>
						<Dialog.Title>Add-Ons and Submit</Dialog.Title>
						<Dialog.Content>
							<Checkbox.Item 
								uncheckedColor="grey"
								label="Add Mashed Peas?"
								status={checked ? 'checked' : 'unchecked'}
								onPress={() => {setChecked(!checked);}}
							/>
          </Dialog.Content>
          <Dialog.Actions>
            <Button title="Submit Order" onPress={SubmitOrder}/>
          </Dialog.Actions>
					</Dialog>
				</Portal>
      </SafeAreaView>
    )
}

export {RestaurantDetailScreen}