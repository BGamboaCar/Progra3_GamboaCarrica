import React from "react";
import { Text, View, StyleSheet } from "react-native";
function Home() {
    return(            
            <View style={styles.contenedor} >
                <Text style={styles.titulo} > Home</Text>
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

    }

})

export default Home;