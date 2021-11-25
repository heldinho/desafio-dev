import React from 'react';
import { Text, View } from 'react-native';
import { normalize } from '../utils';

export default function Header() {
  return (
    <View style={{ ...header.container }}>
      <Text style={{ ...header.title }}>CNAB</Text>
    </View>
  );
}

const header = {
  container: {
    paddingVertical: 30,
    backgroundColor: '#323232',
  },
  title: {
    color: '#fff',
    fontSize: normalize(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
