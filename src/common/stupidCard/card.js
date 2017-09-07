import React, { Component } from 'react';
import { View } from 'react-native';
import oldStyle from './style'

// Example
// you can replace with new style like this

// const card      = {card: {width: 300, height: 300}};
// const cardTitle = {cardTitle: {fontSize: 40}}
// <Card styles={card}></Card>
// <CardTitle styles={cardTitle}></CardTitle>

class Card extends Component {
    render() {

        const { styles, children } = this.props
        const newStyles = styles || {}
        return (
            <View style={[oldStyle.container, oldStyle.card, newStyles.card]}>
                {children}
            </View>
        );
    }
}

export default Card
