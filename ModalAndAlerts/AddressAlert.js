import * as React from 'react';
import { Button } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';

function AddressAlert({addressAlertVisible, setAddressAlertVisible}){
    return(
    <Portal>
        <Dialog visible={addressAlertVisible} onDismiss={()=>{setAddressAlertVisible(false)}}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Please add an address before moving on.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button color="#007ee6" title="Back"onPress={()=>{setAddressAlertVisible(false)}}/>
            </Dialog.Actions>
        </Dialog>
    </Portal>
    )
}

export {AddressAlert}