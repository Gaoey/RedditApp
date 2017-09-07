import React, { Component } from 'react'
import { View } from 'react-native'
import oldStyle from './style'

class CardItem extends Component {
    render() {
        const { styles, children } = this.props
        const newStyles = styles || {}
        return (
            <View style={[oldStyle.cardItem, newStyles.cardItem]}>
                {children}
            </View>
        )
    }
}

export default CardItem
