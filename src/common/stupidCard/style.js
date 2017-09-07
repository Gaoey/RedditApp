import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin: 5
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0.3,
        }
    },
    cardImage: {
        flex: 1
    },
    cardTitle: {
        flex: 1,
        flexDirection: 'row',
        padding: 16
    },
    cardItem: {
        flex: 1
    },
    cardContent: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
    }
});

export default styles;
