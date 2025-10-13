import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";


function Card(props) {
    return (
        <View style={styles.texto}>
            <Text style={styles.texto}>{props.item.title}</Text>
            <Text>{props.item.price}</Text>
            <Text>{props.item.description}</Text>
            <Text>{props.item.category}</Text>
            <Text>{props.item.image}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontWeight: "bold"
    },
    resto:{
        alignItems:"center"
    }
})

export default Card;
