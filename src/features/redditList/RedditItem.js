//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RedditItem = ({ data }) => {
    return (
        <View>
            <Image
                style={{width: 100, height: 100}}
                source={{uri:data.thumbnail}}
            />
            <Text>{data.title}</Text>
            <Text>{data.author}</Text>
            <Text>-----------------------</Text>
        </View>
    );
};


export default RedditItem;
