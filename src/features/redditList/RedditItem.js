//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardItem, CardContent, CardImage } from '../../common/stupidCard'

const RedditItem = ({ data }) => {
    const hasImageSrc = data.thumbnail !== ""
    return (
        <Card>
            <CardContent>
                { hasImageSrc ? <CardImage src={data.thumbnail} /> : null }
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
