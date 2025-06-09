import { View, Text } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, TextInput } from 'react-native-paper';
import { firebaseDb } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AddStoreForm = ({ hideDialog }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Store name is required'),
    type: Yup.string().required('Store type is required'),
    location: Yup.string().required('Store location is required'),
  });

  const db = firebaseDb;

  const handleSubmitForm = async (values) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'stores'), {
        ...values,
        createdAt: new Date(),
      });
      alert('Store created successfully');
      hideDialog();
    } catch (error) {
      console.error('Error adding store:', error);
      alert(error.message || 'An error occurred while creating the store');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{ name: '', type: '', location: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={{ paddingInline: 10 }}>
            <TextInput
              mode='flat'
              onChangeText={handleChange('name')}
              value={values.name}
              placeholder='Enter your store name...'
              activeUnderlineColor='#7ED4AD'
              error={errors.name && touched.name}
              label={'Store Name'}
              style={{ backgroundColor: 'transparent' }}
            />
            <TextInput
              onChangeText={handleChange('location')}
              value={values.location}
              placeholder='Enter your store location...'
              activeUnderlineColor='#7ED4AD'
              label={'Location'}
              style={{ backgroundColor: 'transparent', marginBlock: 30 }}
            />
            <TextInput
              onChangeText={handleChange('type')}
              value={values.type}
              placeholder='Enter your store type...'
              activeUnderlineColor='#7ED4AD'
              label={'Store Type'}
              style={{ backgroundColor: 'transparent' }}
            />

            <View style={{ alignItems: 'center' }}>
              <Button
                mode='contained'
                style={{ width: 250, borderRadius: 10, backgroundColor: '#7ED4AD', marginTop: 40 }}
                onPress={handleSubmit}
                loading={isLoading}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Create</Text>
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddStoreForm;
