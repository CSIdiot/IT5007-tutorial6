import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header'
import RNApp from "./RNApp";
import { ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({ uri: "http://192.168.3.117:3000/graphql"})

const App = () => {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Header title="Hotel Management" />
          <RNApp client={client}/>
        </View>

        
      </ApolloProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App