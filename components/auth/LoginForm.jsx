import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, router } from 'expo-router';
import { firebaseAuth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useStore } from '../../zustandStore/store';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const { setLoginUser } = useStore();

  const auth = firebaseAuth;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmitForm = async (values) => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, values.email, values.password);
      setIsLoading(false);
      router.push('marketplace');
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={{ marginTop: 30, paddingInline: 20 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmitForm(values);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={{ paddingInline: 10 }}>
            <TextInput
              mode='flat'
              onChangeText={handleChange('email')}
              value={values.email}
              placeholder='Enter your email...'
              keyboardType='email-address'
              activeUnderlineColor='#7ED4AD'
              error={errors.email && touched.email}
              label={'Email'}
              style={{ backgroundColor: 'transparent', marginBottom: 70 }}
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
              <Button
                mode='contained'
                style={{ width: 250, borderRadius: 10, backgroundColor: '#7ED4AD', marginTop: 40 }}
                onPress={handleSubmit}
                loading={isLoading}
              >
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
              </Button>
              <Link href={''} style={{ marginTop: 20 }}>
                <Text style={{ color: '#7ED4AD' }}>Forget Password ?</Text>
              </Link>
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

export default LoginForm;
