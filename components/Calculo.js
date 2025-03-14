import { StyleSheet, Text, View } from 'react-native';

export default function Calculo(props) {

    const { valor , porcentagem} = props
    const aumento = Math.floor(valor) * Math.floor(porcentagem)/100
    const total = Math.floor(valor) + Math.floor(aumento)

  return (
    <View>
        <Text style={styles.texto}>Valor Inicial: {valor}</Text>
        <Text style={styles.texto}>Aumento: {porcentagem}</Text>
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
