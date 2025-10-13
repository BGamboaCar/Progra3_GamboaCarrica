import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Contador from "../components/Contador";


function Home() {
    function click(){
        console.log("me clickearon");
        
    }

    return(            
        <View style={styles.contenedor}>
            <Text>Hola mundo</Text>
            <Pressable onPress={()=>click()} style={styles.zona}>
                <Text style={styles.texto}>clickeame</Text>
            </Pressable>
            <Contador/>

        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        textAlign: "center",
        padding: 10
    },
    zona: {
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 10,
        borderRadius: 4,
    },
    texto: {
        fontWeight: "bold"
    }
})


export default Home;