//import liraries
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { project } from '../../config';
import { fetchPostsIfNeeded } from './RedditListAction';
import  RedditItem  from './RedditItem'

// create a component
class RedditListContainer extends Component {

    componentDidMount() {
        this.props.fetchRedditPost()
    }

    render() {
        const { isFetching, error, value } = this.props.posts
        const postsIsEmpty = value.length === 0
        return (
            <ScrollView>
                {isFetching && postsIsEmpty ? <Text>loading</Text> : null}
                {error ? <Text>{error}</Text> : null}
                {
                    value.map((data) => {
                        const thisData = data.data
                        return <RedditItem key={thisData.id} data={thisData}/>
                    })
                }
            </ScrollView>
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
