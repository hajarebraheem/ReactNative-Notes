import React, {useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../../redux/connect/connect';
import {Logout} from '../../helper/Logout';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './Style';
export const Result = ({
  navigation,
  actions,
  states,
}: {
  navigation: any;
  actions: any;
  states: any;
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            Logout(actions, navigation);
          }}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, actions]);

  const deleteNote = (note: any) => {
    actions.removeNote(note);
  };

  const list = states.notes.map(
    (
      e: (
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
      )[],
      i: React.Key | null | undefined,
    ) => (
      <View key={i}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{e[1]}</Text>
        </View>

        <Text style={styles.noteText}>"{e[0]}"</Text>
        <TouchableOpacity style={styles.delete} onPress={() => deleteNote(e)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        {list.length > 0 ? (
          <ScrollView style={styles.scroll}>{list}</ScrollView>
        ) : (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>No Note To Show</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
