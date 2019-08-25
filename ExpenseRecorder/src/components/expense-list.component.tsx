import { Component } from "react";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Expense } from "../models/expense.model";

export default class ExpenseList extends Component {

  expense: Expense | undefined;
  expenses: Expense[] | undefined;

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.expenseInfo}>
            <Text style={styles.expense}>Vegetables</Text>
            <Text style={styles.expense}>30</Text>
          </View>
          <View style={styles.expenseInfo}>
            <Text style={styles.expenseDescription}>Aug 08, 2019</Text>
            <Text style={styles.expenseDescription}>Cash</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  expenseInfo: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  expense: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  expenseDescription: {
    fontSize: 9,
    fontWeight: '300',
    color: 'gray',
  }
})