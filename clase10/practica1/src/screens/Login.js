import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";
import { auth } from "../firebase/config";


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            value: "",
            password: "",
            error: ""
        }
      };
    
      onSubmit(email, password){
        if (!email.includes("@")){
            this.setState({error: "Email mal formateado"})
            return

        }
        if (password.length < 6){
            this.setState({error: "Password debe tener minimo 6 caracteres"})
            return
        }
        auth.signInWithEmailAndPassword(email, password)
         .then((response) => {
             this.setState({loggedIn: true});
             this.props.navigation.navigate("HomeMenu", { screen: "Home" })
         })
         .catch(error => {
            this.setState({error: "credenciales invalidas"})

           
         })
      };

    render( ){
        return(         
            <View style={styles.contenedor} >
                <Text style={styles.titulo}>Login</Text>
                 <Pressable
                    onPress={ ()=> this.props.navigation.navigate("Register")}>
                    <Text style={styles.texto} >Ir al register</Text>
                </Pressable>
    
                <Pressable
                    onPress={ ()=> this.props.navigation.navigate("HomeMenu", { screen: "Home" } )}>
                    <Text style={styles.texto}>Entrar en la app</Text>
                </Pressable>

                <TextInput  style={styles.formulario}
                    keyboardType="email-address"
                    placeholder="email"
                    onChangeText={ text => this.setState({email:text}) }
                    value={this.state.email} />

                <TextInput style={styles.formulario} 
                    keyboardType="default"
                    placeholder="password"
                    secureTextEntry={true} 
                    onChangeText={ text => this.setState({password:text}) }
                    value={this.state.password}/> 

                <Text>{this.state.error}</Text>

                <Pressable onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={styles.texto} > Login </Text> 
                </Pressable>

                <View style={styles.texto}>
                    <Text>Datos ingresados:</Text>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.password}</Text>
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
    texto: {
        textAlign: "center",
        color: "#c71585",
        marginBottom: 5,
        backgroundColor: "#ffe6ef",
        padding: 10,
        borderRadius: 20
    },
    titulo: {
        fontWeight: "bold",
        color: "#b03060",
        textAlign: "center",
        fontSize: 16,
        marginBottom: 10
    },
    formulario: {
        height: 20,
        paddingVertical: 15,
        borderWidth: 5,
        borderColor: "#ffe6ef",
        borderStyle: "solid",
        borderRadius: 20,
        marginVertical: 10,
        textAlign: "center"
     }
 

})

export default Login;