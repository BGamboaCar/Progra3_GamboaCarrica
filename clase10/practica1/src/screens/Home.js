import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DynamicForm from "../components/DynamicForm";
function Home() {
    return(            
            <View style={styles.contenedor} >
                <Text style={styles.titulo} > Home</Text>
                <Text>
                    <DynamicForm/>
                </Text>
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
        marginBottom: 3

    }

})

export default Home;