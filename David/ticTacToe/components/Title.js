import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 2, // Adding a border around the title
    borderColor: '405D72', // Black border color for better contrast
    backgroundColor: '#131842', // Orange background color
    padding: 10, // Padding to give some space around the text
    borderRadius: 5, // Optional: Adding some border radius to make the edges rounded
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold', // Bold text
    textAlign: 'center',
    color: '#845EC2', // Thick blue font
    paddingHorizontal:35
  },
});

export default Title;
