import React from 'react';
import {View} from 'react-native';
import {store} from './context.js';

const Top = () => {
  const {state} = React.useContext(store);

  return (
    <View style={{width: 100, height: 100, backgroundColor: state.color}}/>
  );
};

export default Top;
