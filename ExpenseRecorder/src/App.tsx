/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ExpenseInput from './components/expense-input.component';
import ExpenseList from './components/expense-list.component';
import ExpenseTotal from './components/expense-total.component';

const App = () => {
  const theme = {
    color: "dodgerblue"
  }

  return (
    <Fragment>
      <StatusBar backgroundColor={theme.color} barStyle="light-content" />
      <ExpenseTotal />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <ExpenseList />
      </ScrollView>
      <ExpenseInput />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'hsl(360, 100%, 100%)'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
