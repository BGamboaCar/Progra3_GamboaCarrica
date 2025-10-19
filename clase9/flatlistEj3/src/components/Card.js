import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";


function Card(props) {
    return (
        <View style={styles.texto}>
            <Text style={styles.texto}>{props.item.name}</Text>
            <Text style={styles.resto} >{props.item.species}</Text>
            <Text style={styles.resto} >{props.item.gender}</Text>
            <Image source={{uri: props.item.image}} resizeMode="contain" style={styles.foto}  />
        </View>
    );
};

const styles = StyleSheet.create({
    texto: {
        fontWeight: "bold",
        alignItems: "center",
        backgroundColor: "#ffd6e7",
        marginBottom: 30,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 15

    },
    resto:{
        alignItems:"center",
        marginLeft: 40,
        marginRight: 40,

    },
    foto: {
    width: 700,
    height: 500 
    }
})

export default Card;
