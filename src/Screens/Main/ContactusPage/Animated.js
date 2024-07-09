// AnimatedText.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedText = ({ text, style, baseDelay }) => {
  return (
    <View style={styles.row}>
      {text.split('').map((char, index) => (
        <Animatable.Text
          key={`${char}-${index}`}
          style={style}
          animation="fadeInUp"
          delay={baseDelay + index * 50}
          useNativeDriver
        >
          {char}
        </Animatable.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
});

export default AnimatedText;