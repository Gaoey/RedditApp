//import liraries
import React, { Component } from 'react';
import Mascot from 'mascot'
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RedditListContainer } from '../../features';
import { project } from '../../config';

const { Components } = Mascot
const { NavBar } = Components

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar title={{ text: 'GAOEY REDDIT' }} hasShadow />
        <View style={styles.RedditList}>
          <RedditListContainer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  RedditList: {
    marginTop:70
  }
})

export default Home;
