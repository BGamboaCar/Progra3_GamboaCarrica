import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            value: "",
            password: "",
            userName: ""
        }
      };
    
    onSubmit(email, pass){
        auth.createUserWithEmailAndPassword(email, pass)
            .then( response => {
                this.setState({registered: true});
                this.props.navigation.navigate("Login")
                
                db.collection('users').add({
                    email: email,
                    userName: this.state.userName,
                    createdAt: Date.now(),
                })
                .then()
                .catch( e => console.log(e))
            })     
            .catch( error => {
                this.setState({error: 'Fallo en el registro.'})
                console.log(this.state);
                
            })
        
          };  

    render(){
        return(   
            <View style={styles.contenedor} >
                <Text style={styles.titulo} >Registro</Text>
                <Pressable
                    onPress={ ()=> this.props.navigation.navigate("Login")}>
                    <Text style={styles.texto}>Ir al Login</Text>
                </Pressable>


                <TextInput  style={styles.formulario}
                    keyboardType="email-address"
                    placeholder="email"
                    onChangeText={ text => this.setState({email:text}) }
                    value={this.state.email} />
                
                <TextInput style={styles.formulario}
                keyboardType= "default"
                placeholder="userName"
                onChangeText={ text => this.setState({userName:text}) }
                value={this.state.userName}
                />

                <TextInput style={styles.formulario} 
                    keyboardType="default"
                    placeholder="password"
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}/> 

                <Pressable onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={styles.texto} > Register </Text> 
                </Pressable>

                <View style={styles.texto}>
                    <Text>Datos ingresados:</Text>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.password}</Text>
                    <Text>{this.state.userName}</Text>
                </View>
            </View>         
    
            );
    }
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
        borderRadius: 25,
        marginTop: 8

    },
    formulario: {
       height: 20,
       paddingVertical: 15,
       borderWidth: 5,
       borderColor: "#ffe6ef",
       borderStyle: "solid",
       borderRadius: 6,
       marginVertical: 10,
       textAlign: "center"
    }

})

export default Register;