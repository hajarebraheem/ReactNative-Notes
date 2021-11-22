import React from 'react';
import {connect} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {login} from '../../redux/actions';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, Pressable, TextInput, Image, Text} from 'react-native';
import {styles} from './Style';
import colors from '../../colors-config/colors';

const mapStateToProps = (state: {auth: any; notes: any}) => ({
  states: {
    auth: state.auth,
  },
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators({login}, dispatch),
});

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
              source={require('../../assets/drawing.png')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
