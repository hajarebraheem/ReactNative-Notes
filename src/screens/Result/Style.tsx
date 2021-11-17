import {StyleSheet} from 'react-native';
import colors from '../../colors-config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 120,
    paddingHorizontal: 30,
  },
  noteContainer: {
    borderRadius: 3,
    height: 650,
    padding: 15,
    textAlignVertical: 'top',
  },
  scroll: {
    height: 250,
  },
  dateContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lighterBlue,
  },
  date: {
    marginBottom: 0,
    color: colors.lightBlue,
  },
  delete: {
    flexDirection: 'row-reverse',
  },
  deleteText: {
    color: colors.pink,
    marginBottom: 30,
  },
  noteText: {
    fontStyle: 'italic',
    fontSize: 20,
    color: colors.blue,
    padding: 10,
    paddingBottom: 25,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: colors.lightBlue,
    fontSize: 25,
  },
  logout: {
    color: colors.yellow,
    fontSize: 18,
  },
});
