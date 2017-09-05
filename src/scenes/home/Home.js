//import liraries
import React, { Component } from 'react';
import Mascot from 'mascot'
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RedditListContainer } from '../../features';
import { project } from '../../config';


// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.decorate}>
        <RedditListContainer />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  decorate:{
    marginTop:30
  }
});

//make this component available to the app
export default Home;
