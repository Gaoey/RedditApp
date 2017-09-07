//import liraries
import React, { Component } from 'react';
import Mascot from 'mascot'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RedditListContainer } from '../../features';
import { project } from '../../config';
import { redditCategories } from '../../constants/redditCategories'

const { Components } = Mascot
const { NavBar, WizardTabBar } = Components

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      onClickCategory: "all"
    }
  }

  onClickTab = (e) => {
    this.setState({
      onClickCategory: e
    })
  }

  generateTab = () => {
    return redditCategories.map((e, index) => {
      return {
        id: index,
        title: e,
        type: "icon",
        action: () => this.onClickTab(e)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title={{ text: 'GAOEY REDDIT' }} hasShadow />
        <View style={styles.content}>
          {/* {tab view} */}
          <WizardTabBar
            tabs={this.generateTab()} />
          <RedditListContainer category={this.state.onClickCategory} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 70
  }
})

export default Home;
