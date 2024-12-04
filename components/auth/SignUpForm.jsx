import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'expo-router';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ marginTop: 10, paddingInline: 20 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form values:', values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={{ paddingInline: 10 }}>
            <TextInput
              mode='flat'
              onChangeText={handleChange('name')}
              value={values.name}
              placeholder='Enter your name...'
              activeUnderlineColor='#7ED4AD'
              error={errors.name && touched.name}
              label={'Name'}
              style={{ backgroundColor: 'transparent', marginBottom: 50 }}
            />
            <TextInput
              mode='flat'
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder='Enter your email...'
              keyboardType='email-address'
              activeUnderlineColor='#7ED4AD'
              error={errors.email && touched.email}
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
              right={<TextInput.Icon icon={showPassword ? 'eye' : 'eye-off'} onPress={handleShowPassword} />}
              style={{ backgroundColor: 'transparent' }}
            />

            <View style={{ alignItems: 'center' }}>
              <Button mode='contained' style={{ width: 250, borderRadius: 10, backgroundColor: '#7ED4AD', marginTop: 40 }} onPress={handleSubmit}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
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
