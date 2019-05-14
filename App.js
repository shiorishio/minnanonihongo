import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.stdmenu}>こんにちわ、何を勉強したいか?</Text>
          <Text style={styles.stdmenu}>このメニューから選んで下さい。</Text>
          <Text style={styles.stdmenu}>１。日本語の意味を理解したい。</Text>
          <Text style={styles.stdmenu}>２。日本語で会話の練習したい。</Text>
          <Text style={styles.stdmenu}>３。日本語の文法を勉強したい。</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

        <Icon
          name="microphone"
          type="font-awesome"
          size ="80"
          justifyContent= 'flex'
        />
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e8b57",
  },
  stdmenu:{
    fontSize: 20,
    color: 'white',
  },
  mic:{
    position: 'absolute',
    bottom:0,
  },
});
