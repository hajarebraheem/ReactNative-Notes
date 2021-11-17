import {StyleSheet} from 'react-native';
import colors from '../../colors-config/colors';

export const styles = StyleSheet.create({
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
