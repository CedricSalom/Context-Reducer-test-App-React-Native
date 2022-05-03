import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {store} from './context.js';

const Top = () => {
  const {dispatch} = React.useContext(store);

  return (
    <View style={styles.view}>
      <Button 
        style={styles.redButton} 
        onPress={ () => { dispatch({type: 'SET_COLOR', payload: 'red'}); }}
        title= 'Red'
      />

      <Button 
        style={styles.blueButton} 
        onPress={ () => { dispatch({type: 'SET_COLOR', payload: 'blue'}); }} 
        title='Blue'
       />
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    },
    redButton: {
        backgroundColor:'red',
        width: 90,
        height: 40,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    blueButton: {
        backgroundColor:'blue',
        width: 90,
        height: 40,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default Top;
