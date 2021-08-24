import React from 'react';
import { View, Text } from 'react-native';

export default function Detalhes({ route }) {
  const { endereco, estado, bairro, cidade } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {endereco} </Text>
      <Text> {estado} </Text>
      <Text> {bairro} </Text>
      <Text> {cidade} </Text>
    </View>
  );
}
