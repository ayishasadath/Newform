import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  FlatList,
} from 'react-native';
import Form from './Form';
const App = () => {
  const [array, setarray] = useState([]);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  return (
    <ScrollView>
      <View style={styles.input}>
        <Form
          name="Name"
          onChangeText={val => {
            console.log(val);
            setname(val);
          }}
          value={name}
        />
        <Form
          name="Email"
          onChangeText={eml => {
            console.log(eml);
            setemail(eml);
          }}
          value={email}
        />
        <Form
          name="Address"
          onChangeText={add => {
            console.log(add);
            setaddress(add);
          }}
          value={address}
        />
        <Button
          title="Login"
          onPress={() => {
            if (
              name.length === 0 ||
              email.length === 0 ||
              address.length === 0
            ) {
              Alert.alert('Form incomplete');
            } else {
              if (array.length === 0) {
                const dataset = [...array];
                dataset.push({name: name, email: email, address: address});
                setarray(dataset);
                Alert.alert('Your Login');
                console.log('array', array);
              } else {
                let exist = false;
                array.map(element => {
                  if (
                    element.name === name &&
                    element.email === email &&
                    element.address === address
                  ) {
                    exist = true;
                  }
                });
                if (exist) {
                  Alert.alert('Already exist');
                } else {
                  const dataset = [...array];
                  dataset.push({name: name, email: email, address: address});
                  setarray(dataset);
                  Alert.alert('Your Login');
                }
              }
            }
          }}
        />
      </View>
      <FlatList
        data={array}
        renderItem={({item}) => {
          return (
            <Text style={styles.flatlist}>
              Name:{item.name},Email:{item.email},Address:{item.address}
            </Text>
          );
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 200,
    paddingTop: 50,
    paddingBottom: 10,
    padding: 45,
    backgroundColor: 'red',
    borderWidth: 1,
  },
  flatlist: {
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 20,
    backgroundColor: 'pink',
  },
});
export default App;
