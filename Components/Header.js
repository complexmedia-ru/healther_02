import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export const Header = props => {
  return (   

    <View style={styles.container}>
            <Text>YOPTA</Text>
    </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }

}
)