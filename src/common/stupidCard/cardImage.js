import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { PropTypes } from 'prop-types'
import oldStyle from './style'

class CardImage extends Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    render() {
        const { src, styles } = this.props
        const newStyles = styles || {}
        return (
            <View style={[oldStyle.CardImage, newStyles.CardImage]}>
                <Image
                    style={{width: 66, height: 58}}
                    source={{ uri: src }}
                />
            </View>
        );
    }
}

export default CardImage
