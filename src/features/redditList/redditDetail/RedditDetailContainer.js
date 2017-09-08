
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { project } from '../../../config'
import { fetchPostsIfNeeded } from './redditDetailAction'
import { Card } from '../../../common/stupidCard'
import Mascot from 'mascot'
import RedditDetailItem from './RedditDetailItem';

class redditDetailContainer extends Component {

    componentDidMount() {
        this.props.fetchPostsIfNeeded(this.props.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.id !== this.props.id) {
            this.props.fetchRedditPost(nextProps.id)
        }
    }

    render() {
        const { postDetail } = this.props
        const { error, value, isFetching } = postDetail
        const { Images } = Mascot
        const postsIsEmpty = value.length === 0
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
                    {isFetching || postsIsEmpty ? <Image source={Images["LOADING_ANIMATION"]} style={styles.loading} /> : <RedditDetailItem data={value} />}
                    {error ? <Text>{error}</Text> : null}
                </Card >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        width: 200,
        height: 200
    },
    card:{
        height:300
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        postDetail: state[project.name].postDetail
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPostsIfNeeded: (id) => {
            dispatch(fetchPostsIfNeeded(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(redditDetailContainer)
