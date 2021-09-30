import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
const form = props => {
  return (
    <View>
      <Text>{props.name}</Text>
      <TextInput
        style={styles.mystl}
        {...props}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mystl: {
    height: 45,
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
});
export default form;
