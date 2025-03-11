import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Calculo(props) {

    const { valor , porcentagem} = props
    const aumento = valor * porcentagem
    const total = valor + aumento

  return (
    <View>
        <Text style={styles.texto}>{total}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        color: '#ED145B',
        textAlign: 'center',
        fontSize: 20
    }
})
