//import liraries
import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardItem, CardContent, CardImage } from '../../common/stupidCard'
import { hasImageSrc } from '../../utils/utilFunction';

const RedditItem = ({ data }) => {
    return (
        <Card onPress={() => Actions.modularDetail(data.id)}>
            <CardContent>
                {hasImageSrc(data.thumbnail) ? <CardImage src={data.thumbnail} /> : null}
                <CardTitle>
                    <Text>{data.title}</Text>
                </CardTitle>
                <CardItem>
                    <Text>{data.description}</Text>
                </CardItem>
            </CardContent>
        </Card>)
};


export default RedditItem;
