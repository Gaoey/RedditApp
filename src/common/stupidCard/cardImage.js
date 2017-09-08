import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'
import { PropTypes } from 'prop-types'
import oldStyle from './style'

class CardImage extends Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
    }

    render() {
        const { src, styles } = this.props
        const newStyles = styles || {}
        const { height, width } = Dimensions.get('window')

        console.log(src)
        return (
            <View style={[oldStyle.CardImage, newStyles.CardImage]}>
                <Image
                    style={{ width: width-20, height: 200 }}
                    source={{ uri: src }}
                />
            </View>
        );
    }
}

export default CardImage
