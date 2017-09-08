import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardItem, CardImage, CardContent } from '../../../common/stupidCard'
import { hasImageSrc } from '../../../utils/utilFunction';

const RedditDetailItem = ({ data }) => {
    return (
        <CardContent>
            {hasImageSrc(data.thumbnail) ? <CardImage src={data.thumbnail} /> : null}
            <CardTitle>
                <Text>{data.title}</Text>
            </CardTitle>
        </CardContent>
    );
};

export default RedditDetailItem;
