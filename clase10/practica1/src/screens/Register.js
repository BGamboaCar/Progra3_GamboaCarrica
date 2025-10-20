import React from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";

function Register(props) {
    return(   
        <View style={styles.contenedor} >
            <Text style={styles.titulo} >Registro</Text>
            <Pressable
                onPress={ ()=> props.navigation.navigate("Login")}>
                <Text style={styles.texto}>Ir al Login</Text>
            </Pressable>



        </View>         

        );
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        backgroundColor: "pink",
        borderRadius: 25,
        margin: 15
    }, 
    titulo: {
        fontWeight: "bold",
        color: "#b03060",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 10

    },
    texto: {
        textAlign: "center",
        color: "#c71585",
        backgroundColor: "#ffe6ef",
        padding: 10,
        borderRadius: 25

    }

})

export default Register;