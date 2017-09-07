//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { ScrollView, Text, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { project } from '../../config';
import { fetchPostsIfNeeded } from './RedditListAction';
import RedditItem from './RedditItem'

// create a component
class RedditListContainer extends Component {

    static propTypes = {
        category: PropTypes.string,
    }

    componentDidMount() {
        this.props.fetchRedditPost(this.props.category)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.category !== this.props.category){
            this.props.fetchRedditPost(nextProps.category)
        }
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
        fetchRedditPost: (category) => {
            dispatch(fetchPostsIfNeeded(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditListContainer)
