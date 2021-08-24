import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text> Tela de login </Text>
      <Button
        title='Ir para Home'
        onPress={function () {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
