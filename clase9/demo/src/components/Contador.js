import { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0
        }
    }

    botonClick(){
        this.setState({contador: this.state.contador +1})
    }

    render(){
        return(
            <View style={styles.principal}>
                 <Text>Cantidad de clicks: {this.state.contador}</Text>
                <Pressable onPress={()=>this.botonClick()} style={styles.zona} >
                <Text style={styles.texto}>Click aqui para contar</Text>
                </Pressable>
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    principal:{
        marginLeft: 5,
        marginRight: 5
    },
    zona: {
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4
    },
    texto: {
        fontWeight: "bold"
    }
})



export default Contador