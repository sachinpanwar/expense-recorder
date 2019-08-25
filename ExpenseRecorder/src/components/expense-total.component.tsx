import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default class ExpenseTotal extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.expenseTotal}>Total: </Text>
        <Text style={styles.expenseTotal}>4230</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  expenseTotal: {
    fontSize: 34,
    fontWeight: '600',
    color: 'black',
  }
})