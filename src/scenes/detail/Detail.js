import React, { Component } from 'react'
import Mascot from 'mascot'
import { Actions } from 'react-native-router-flux'
import { View, Text, StyleSheet, Button } from 'react-native'
import { RedditDetailContainer } from '../../features'
const { Components } = Mascot
const { NavBar, WizardTabBar } = Components


class Detail extends Component {
    render() {
        const id = this.props.data
        return (
            <View style={styles.container}>
                <NavBar
                    title={{ text: 'GAOEY REDDIT' }}
                    hasShadow
                    navBtnLeft={[
                        {
                            text: " < BACK ",
                            action: () => Actions.pop()
                        }
                    ]} />
                <View style={styles.content}>
                    <RedditDetailContainer id={id} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: 400,
        marginTop: 70
    }
})

export default Detail;
