import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as Icons from '@expo/vector-icons';

export default function ButtonOptions() {
  const chooseFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync();
      console.log(res);
    } catch (err) {
      throw err;
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ ...button.box }} onPress={chooseFile}>
        <Text style={{ ...button.text }}>Selecionar Remessa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...button.box }}>
        <Text style={{ ...button.text }}>Enviar Remessa</Text>
      </TouchableOpacity>
    </View>
  );
}

const button = {
  box: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#1890ff',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
};
