import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFileSelector from 'react-native-file-selector';
import FilePickerManager from 'react-native-file-picker';

export default function ButtonOptions() {
  const chooseFile3 = async () => {
    FilePickerManager.showFilePicker(null, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        this.setState({
          file: response,
        });
      }
    });
  };

  const chooseFile2 = async () => {
    await RNFileSelector.Show({
      title: 'Select File',
      onDone: path => {
        console.log('file selected: ' + path);
      },
      onCancel: () => {
        console.log('cancelled');
      },
    });
  };

  const chooseFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.plainText],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={{ ...button.box }} onPress={chooseFile3}>
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
