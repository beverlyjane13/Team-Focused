import React from 'react';
import { View, Text } from 'react-native';

const GreetUser = ({ username }) => {
  return (
    <View>
      <Text>Hello, I'am {username}!</Text>
    </View>
  );
};

const Focusedlang = () => {
  return (
    <View>
      <GreetUser username="Leo" />
      <GreetUser username="Bev" />
      <GreetUser username ="Phaul" />
    </View>
  );
};

export default Focusedlang;