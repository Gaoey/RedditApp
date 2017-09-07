//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardItem, CardContent, CardImage } from '../../common/stupidCard'

const RedditItem = ({ data }) => {
    return (
        <Card>
            <CardContent>
                <CardImage src={data.thumbnail} />
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
