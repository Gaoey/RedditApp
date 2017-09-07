//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { project } from '../../config';
import { fetchPostsIfNeeded } from './RedditListAction';
import RedditItem from './RedditItem'

// create a component
class RedditListContainer extends Component {

    componentDidMount() {
        this.props.fetchRedditPost()
    }

    keyExtractor = (item) => item.data.id

    renderItem = ({ item }) => {
        const thisData = item.data
        return < RedditItem
            id={thisData.id}
            data={thisData} />
    }

    render() {
        const { isFetching, error, value } = this.props.posts
        const postsIsEmpty = value.length === 0
        return (
            <View>
                {isFetching && postsIsEmpty ? <Text>loading</Text> : null}
                {error ? <Text>{error}</Text> : null}
                <FlatList
                    data={value}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state[project.name].posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRedditPost: () => {
            dispatch(fetchPostsIfNeeded())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditListContainer)
