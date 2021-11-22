import React, {useState, useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {logout, notes} from '../../redux/actions';
import {Logout} from '../../helper/Logout';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import colors from '../../colors-config/colors';
import {styles} from './Style';

const mapStateToProps = (state: {auth: any; notes: any}) => ({
  states: {
    auth: state.auth,
    notes: state.notes,
  },
});

const ActionCreators = {
  logout,
  notes,
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export const Typing = ({
  navigation,
  actions,
  states,
}: {
  navigation: any;
  actions: any;
  states: any;
}) => {
  const [note, setNote] = useState('');
  const [alert, setAlert] = useState('');

  let flag = true;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            Logout(actions, navigation);
          }}>
          <Text style={styles.logout}>Logout</Text>
        </Pressable>
      ),
    });
  }, [navigation, actions]);

  const handleChange = (name: string, value: React.SetStateAction<string>) => {
    setNote(value);
    setAlert('');
  };

  note && /\S/.test(note) ? (flag = false) : (flag = true);

  const onSubmit = () => {
    if (flag) {
      setAlert('Please Type Your Note Before Saving.');
    } else {
      const date = new Date();
      actions.notes(
        note,
        `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString(
          'en-US',
        )}. `,
      );
      navigation.navigate('Result');
      setNote('');
    }
  };

  const goToNotes = () => {
    navigation.navigate('Result');
  };

  return (
    <View style={styles.container}>
      {states.auth.value ? (
        <View>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/idea.png')}
            />

            <View style={styles.insideHeader}>
              <Text style={styles.headerText}>
                Hello {states.auth.value?.username}
              </Text>

              <Text>Write notes, ideas, todos, and save!</Text>
            </View>
          </View>

          <Text style={styles.alert}>{alert}</Text>

          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              placeholder="Type ..."
              autoCapitalize="none"
              multiline={true}
              selectionColor={colors.yellow}
              value={note}
              onChangeText={value => handleChange('typing', value)}
            />
          </ScrollView>

          <Pressable
            style={note && /\S/.test(note) ? styles.save : styles.disable}
            onPress={() => onSubmit()}>
            <Text style={styles.saveText}>Save</Text>
          </Pressable>

          <Pressable style={styles.save} onPress={() => goToNotes()}>
            <Text style={styles.saveText}>Go To Notes</Text>
          </Pressable>
        </View>
      ) : (
        navigation.navigate('Login')
      )}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
