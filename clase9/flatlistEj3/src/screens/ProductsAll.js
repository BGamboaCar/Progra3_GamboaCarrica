import { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import Card from "../components/Card";

class ProductsAll extends Component{
    constructor(props){
        super(props);
        this.state={
            lista:[]
              
        }
    }

    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
            this.setState({lista: data.results});
        })
        .catch((error) => console.log(error));
  }

    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.texto} >Rick and Morty</Text>
                <FlatList 
                data={this.state.lista}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => <Card item={item}/>}
                style={styles.flatList}
                /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    
  },
  flatList: {
    flex: 1,
    width: "100%"
  },
  texto: {
    fontWeight: "bold",
    color: "red",
    fontSize: 20,
    marginBottom: 30,

  }
})
export default ProductsAll;