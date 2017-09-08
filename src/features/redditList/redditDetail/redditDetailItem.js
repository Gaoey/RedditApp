import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardItem, CardImage, CardContent } from '../../../common/stupidCard'

const redditDetailItem = ({ data }) => {
    const hasImageSrc = data.thumbnail !== ""
    return (
        <CardContent>
            {hasImageSrc ? <CardImage src={data.thumbnail} /> : null}
            <CardTitle>
                <Text>{data.title}</Text>
            </CardTitle>
        </CardContent>
    );
};

export default redditDetailItem;
