import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../redux/connect/connect';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Text,
} from 'react-native';
import colors from '../colors-config/colors';

export const Login = ({
  navigation,
  actions,
}: {
  navigation: any;
  actions: any;
}) => {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>Welcome Back!</Text>
            <Text style={[styles.headerText, styles.grayText]}>
              Login to continue.
            </Text>
          </View>

          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../images/drawing.png')}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={(values, {resetForm}) => {
              if (values.username && values.password) {
                actions.login(values);
                resetForm({});
                navigation.navigate('Typing');
              }
            }}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View>
                <TextInput
                  placeholder="Username"
                  autoCapitalize="none"
                  placeholderTextColor={colors.lighterBlue}
                  selectionColor={colors.yellow}
                  onChangeText={handleChange('username')}
                  value={values.username}
                  style={styles.input}
                />
                {touched.username && errors.username && (
                  <Text style={styles.error}>{errors.username}</Text>
                )}

                <TextInput
                  placeholder="Password"
                  autoCapitalize="none"
                  placeholderTextColor={colors.lighterBlue}
                  selectionColor={colors.yellow}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                  value={values.password}
                  style={styles.input}
                />
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}

                <Pressable onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  headerContainer: {
    paddingTop: 160,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grayText: {
    color: colors.lighterBlue,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    paddingTop: 40,
  },
  input: {
    height: 35,
    borderBottomColor: colors.lighterBlue,
    borderBottomWidth: 1,
    marginTop: 20,
    color: colors.black,
  },
  error: {
    fontSize: 12,
    color: 'red',
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 30,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
