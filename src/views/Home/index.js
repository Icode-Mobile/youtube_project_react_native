import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [cep, setCep] = useState('');

  async function handleApi() {
    await fetch(`https://ws.apicep.com/cep.json?code=${cep}`).then((res) =>
      res.json().then((json) => {
        if (json.ok === true) {
          navigation.navigate('Detalhes', {
            endereco: json.address,
            estado: json.state,
            bairro: json.district,
            cidade: json.city,
          });
        } else {
          alert('CEP inexistente');
        }
      })
    );
  }

  return (
    <View style={styles.container}>
      <Text> API CEP </Text>
      <TextInput placeholder='Digite seu cep' onChangeText={(t) => setCep(t)} />
      <Button title='Pesquisar' onPress={handleApi} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
