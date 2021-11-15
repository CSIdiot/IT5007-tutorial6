import React, { Component } from 'react';
import { View, Text, Button, 	Alert, StyleSheet, ScrollView, SafeAreaView, useColorScheme, StatusBar, TextInput } from 'react-native';
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { useMutation } from "@apollo/react-hooks";




export default class RNApp extends Component {
  constructor() {
	  super()
	  this.state = {name: '', mobile: ''}
    this.newOnAddData = this.newOnAddData.bind(this)
  }

  newOnAddData() {
    let addQuery2 = gql`
    mutation  {
              AddCustomer(customer: {name:"${this.state.name}", mobile:"${this.state.mobile}"})
    }
`;
    console.log(addQuery2)

    const client = this.props.client

    client.mutate({
      mutation: addQuery2,
      variables: {
          name:this.state.name, mobile:this.state.mobile
        },
    }).then(result => {console.log(result);});
    Alert.alert("Add sucessfully")
    }
    





  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle = {false ? 'light-content' : 'dark-content'} /> 
        <ScrollView contentInsetAdjustmentBehavior = "automatic" style = {  {backgroundColor: false ? Colors.darker : Colors.lighter,
          }}>
        <View style = {{padding: 5}}>
          <Text> Name: </Text> 
          <TextInput placeholder = "Customer Name" onChangeText = {(text) => {this.state.name = text}} style = {{height: 40, borderColor: 'gray', borderWidth: 1}} />
          <Text > Mobile: </Text> 
          <TextInput placeholder = "Customer Number" onChangeText = {(text) => {this.state.mobile = text}} style = {{height: 40, borderColor: 'gray', borderWidth: 1}} /> 
        </View>
        <Button	title = "Submit" onPress = {this.newOnAddData}/>
        <View style = {{backgroundColor: false ? Colors.black : Colors.white}}>
        </View> 
      </ScrollView> 
    </SafeAreaView>
    )
    } 
  }
