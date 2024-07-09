import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Board = () => {
  const board = [
    ['X', '', 'X'],
    ['X', '', '0'],
    ['0', '', '0']
  ];
  return (
    <View style={styles.board}>
      {board.flat().map((cell, index) => (
        <View key={index} style={styles.cell}>
          <Text style={styles.cellText}>{cell}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 350,
    height: 350,
    margin: 25,
    borderWidth: 5,  // Thicker border
    borderColor: '#0F67B1',  // Bottle green color
    backgroundColor: '#001247',  // Blue background color
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  cellText: {
    fontSize: 48,
    color: 'white',  // White text color
  },
});

export default Board;
