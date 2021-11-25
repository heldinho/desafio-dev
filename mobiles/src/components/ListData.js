import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function ListData(props) {
  const { data } = props;
  return (
    <ScrollView>
      {data.map(({ taxId, owner, shop, amount }) => (
        <View
          key={taxId}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 20,
            backgroundColor: '#f1f1f1',
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{owner}</Text>
            <Text style={{ flex: 1 }}>{taxId}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }}>{shop}</Text>
            <Text style={{ flex: 1 }}>{amount}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
