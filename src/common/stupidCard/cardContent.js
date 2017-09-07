import React, { Component } from 'react'
import { View } from 'react-native'
import oldStyle from './style'

class CardContent extends Component {
    render() {
        const { styles, children } = this.props
        const newStyles = styles || {}
        return (
            <View style={[oldStyle.cardContent, newStyles.cardContent]}>
                {children}
            </View>
        );
    }
}

export default CardContent
