import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import oldStyle from './style'
import PropTypes from 'prop-types'
// Example
// you can replace with new style like this

// const card      = {card: {width: 300, height: 300}};
// const cardTitle = {cardTitle: {fontSize: 40}}
// <Card styles={card}></Card>
// <CardTitle styles={cardTitle}></CardTitle>

class Card extends Component {

    static propTypes = {
        onPress: PropTypes.func,
    }

    render() {
        const { styles, children, onPress } = this.props
        const newStyles = styles || {}
        const hasOnPress = typeof onPress === 'function'
        return (
            !hasOnPress ?
                <View style={[oldStyle.container, oldStyle.card, newStyles.card]}>
                    {children}
                </View> :
                <TouchableOpacity onPress={onPress} style={[oldStyle.container, oldStyle.card, newStyles.card]}>
                    {children}
                </TouchableOpacity>
        );
    }
}

export default Card
