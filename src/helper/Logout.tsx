import {Alert} from 'react-native';

export const Logout = (
  action: {logout: (arg0: {action: any; navigation: any}) => any},
  navigation: {action: any; navigation: any},
) => {
  Alert.alert('Logout', 'Are You Sure You Want to Logout?', [
    {
      text: 'No',
      style: 'cancel',
    },
    {
      text: 'Yes',
      style: 'destructive',
      onPress: () => action.logout(navigation),
    },
  ]);
};
