import {StyleSheet} from 'react-native';
import colors from '../../colors-config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 120,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
  },
  image: {
    height: 100,
    width: 100,
  },
  insideHeader: {
    padding: 10,
    width: 200,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  alert: {
    color: colors.darkPink,
    marginTop: 10,
    marginBottom: 5,
    height: 20,
  },
  scroll: {
    height: 250,
  },
  input: {
    backgroundColor: colors.lighterBlue,
    borderRadius: 5,
    height: 250,
    padding: 15,
    textAlignVertical: 'top',
  },
  save: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8,
  },
  disable: {
    alignItems: 'center',
    backgroundColor: colors.lighterBlue,
    borderRadius: 3,
    marginTop: 20,
    padding: 8,
  },
  saveText: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  logout: {
    color: colors.yellow,
    fontSize: 18,
  },
});
