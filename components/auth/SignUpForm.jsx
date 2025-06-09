import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { firebaseAuth, firebaseDb } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { router } from 'expo-router';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('User name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const auth = firebaseAuth;
  const db = firebaseDb;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAddUser = async (username, email) => {
    try {
      await addDoc(collection(db, 'users'), {
        username: username,
        email: email,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  const handleSubmitForm = async (values) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      handleAddUser(values.username, values.email);
      setIsLoading(false);
      router.push('marketplace');
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={{ marginTop: 10, paddingInline: 20 }}>
      <Formik
        initialValues={{ email: '', password: '', username: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }) => (
          <View style={{ paddingInline: 10 }}>
            <TextInput
              mode='flat'
              onChangeText={handleChange('username')}
              value={values.username}
              placeholder='Enter your username...'
              activeUnderlineColor='#7ED4AD'
              error={touched.username && errors.username ? true : false}
              label={'User Name'}
              style={{ backgroundColor: 'transparent', marginBottom: 50 }}
            />
            <TextInput
              mode='flat'
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder='Enter your email...'
              keyboardType='email-address'
              activeUnderlineColor='#7ED4AD'
              error={touched.email && errors.email ? true : false}
              label={'Email'}
              style={{ backgroundColor: 'transparent', marginBottom: 50 }}
            />
            <TextInput
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder='Enter your password...'
              secureTextEntry={showPassword ? false : true}
              activeUnderlineColor='#7ED4AD'
              label={'Password'}
              error={touched.password && errors.password ? true : false}
              right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} onPress={handleShowPassword} />}
              style={{ backgroundColor: 'transparent' }}
            />
            {touched.email && errors.password ? <Text style={{ color: 'red' }}>{errors.password}</Text> : null}

            <View style={{ alignItems: 'center' }}>
              <Button
                mode='contained'
                style={{ width: 250, borderRadius: 10, backgroundColor: '#7ED4AD', marginTop: 40 }}
                onPress={handleSubmit}
                loading={isLoading}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</Text>
              </Button>
            </View>

            <View style={styles.container}>
              <Divider style={styles.divider} />
              <Text style={styles.text}>or</Text>
              <Divider style={styles.divider} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30, // Spacing around the divider
  },
  divider: {
    flex: 1, // Divider stretches to fill space
    height: 1, // Thickness of the line
    backgroundColor: '#A9A9A9', // Light gray color
  },
  text: {
    marginHorizontal: 8, // Space around "or"
    color: '#000080', // Navy blue text color
    fontWeight: 'bold', // Makes "or" bold
  },
});
