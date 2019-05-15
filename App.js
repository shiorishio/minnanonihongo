import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ReactMic } from './src/components/ReactMic';
import { AudioCtx } from './src/libs/AudioContext';

//import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      record: false
    }  
  }

  startRecording = () => {
    this.setState({
      record: true

    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time date is: ' , recordedBlob);
  }
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
     //<div>
     //<ReactMic
       //record={this.state.record}
       ////className="sound-wave"
       //onStop={this.onStop}
       //onData={this.onData}
       //strokeColor="#000000"
       //backgroundColor="#FF4081" />
     //<button onTouchTap={this.startRecording} type="button">Start</button>
     //<button onTouchTap={this.stopRecording} type="button">Stop</button>
   //</div> 
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
