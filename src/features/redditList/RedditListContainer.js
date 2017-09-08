import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Mascot from 'mascot'
import {
    ScrollView,
    Text,
    FlatList,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { project } from '../../config';
import { fetchPostsIfNeeded } from './redditListAction';
import RedditItem from './RedditItem'

const { height, width } = Dimensions.get('window');

class RedditListContainer extends Component {

    static propTypes = {
        category: PropTypes.string,
    }

    componentDidMount() {
        this.props.fetchRedditPost(this.props.category)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.category !== this.props.category) {
            this.props.fetchRedditPost(nextProps.category)
        }
    }

    keyExtractor = (item) => item.data.id

    renderItem = ({ item }) => {
        const thisData = item.data
        return < RedditItem
            id={thisData.id}
            data={thisData}
        />
    }

    render() {
        const { isFetching, error, value } = this.props.posts
        const postsIsEmpty = value.length === 0
        const { Images } = Mascot
        return (
            <View>
                {isFetching || postsIsEmpty ?
                    <Image source={Images["LOADING_ANIMATION"]} style={styles.loading} />
                    : <FlatList
                        data={value}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />}
                {error ? <Text>{error}</Text> : null}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        width: 200,
        height: 200,
        marginLeft: width / 4,
        marginTop: height / 6
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state[project.name].posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRedditPost: (category) => {
            dispatch(fetchPostsIfNeeded(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditListContainer)
