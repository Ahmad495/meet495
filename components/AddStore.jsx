import { View } from 'react-native';
import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import AddStoreForm from './AddStoreForm';

const AddStore = ({ visibleDialog, hideDialog }) => {
  return (
    <View>
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <Dialog.Title>Add Store</Dialog.Title>
          <Dialog.Content>
            <AddStoreForm hideDialog={hideDialog} />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AddStore;
