import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";

export default class ExpenseInput extends Component {
  textInput: TextInput | null = null;
  state = {
    text: ''
  }
  onAdd() {
    console.log(this.state.text);
    if (this.textInput != null)
      this.textInput.clear();
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.TextInputContainer}>
          <TextInput
            ref={input => { this.textInput = input }}
            placeholder="Add an expense"
            onChangeText={t => { this.setState({ text: t }) }}
            onSubmitEditing={() => { this.onAdd() }}
            style={styles.TextInput} />
        </View>
        <View style={styles.AddButtonContainer}>
          <Button
            onPress={() => this.onAdd()}
            title="Add" />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  TextInputContainer: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  AddButtonContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  TextInput: {
  }
});