import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar as Status, SafeAreaView } from 'react-native';
import ButtonOptions from './src/components/ButtonOptions';
import Header from './src/components/Header';
import ListData from './src/components/ListData';
import * as Http from './src/services';
export default function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    Http.getAllShops()
      .then(dt => {
        if (dt) {
          setData(dt);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ ...container }}>
        <Header />
        <ButtonOptions />
        <ListData data={data} />
      </SafeAreaView>
    </>
  );
}

const container = {
  marginTop: Status.currentHeight,
};
