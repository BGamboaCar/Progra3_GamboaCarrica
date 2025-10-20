import React from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";

function Login(props) {
    return(         
        <View style={styles.contenedor} >
            <Text style={styles.titulo}>Login</Text>
             <Pressable
                onPress={ ()=> props.navigation.navigate("Register")}>
                <Text style={styles.texto} >Ir al register</Text>
            </Pressable>

            <Pressable
                onPress={ ()=> props.navigation.navigate("HomeMenu", { screen: "Home" } )}>
                <Text style={styles.texto}>Entrar en la app</Text>
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
    texto: {
        textAlign: "center",
        color: "#c71585",
        marginBottom: 5,
        backgroundColor: "#ffe6ef",
        padding: 10,
        borderRadius: 25

    },
    titulo: {
        fontWeight: "bold",
        color: "#b03060",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 10

    }

})

export default Login;