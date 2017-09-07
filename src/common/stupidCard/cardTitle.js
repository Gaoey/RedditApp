import React, { Component } from 'react'
import { View } from 'react-native'
import oldStyle from './style'

class CardTitle extends Component {
    render() {
        
        const { styles, children } = this.props
        const newStyles = styles || {}
        return (
            <View style={[oldStyle.cardTitle, newStyles.cardTitle]}>
                {children}
            </View>
        );
    }
}

export default CardTitle
