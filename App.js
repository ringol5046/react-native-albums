import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
