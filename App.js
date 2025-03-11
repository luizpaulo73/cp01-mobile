import { useState } from 'react';
import { StyleSheet, Image, View, TextInput, Button } from 'react-native';
import Calculo from './components/Calculo';

export default function App() {

  const [valorAtual, setValorAtual] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [validacaoCalculo, setValidacaoCalculo] = useState(false);

  const handleCalculo = () => setValidacaoCalculo(!validacaoCalculo);

  return (
    <View style={styles.container}>
    <View style={styles.divInput}>
      <Image source={require('./assets/10310245.png')} style={styles.image}/>
        <TextInput
            placeholder="Valor Atual do Produto"
            value={valorAtual}
            onChangeText={setValorAtual}
            style={styles.input}
        />   
        <TextInput 
            placeholder="Porcentagem de Aumento"
            value={aumento}
            onChangeText={setAumento}
            style={styles.input}
        />  
        <Button title='Calcular Aumento' onPress={handleCalculo} style={styles.botaoCalcular} color={'#ED145B'}/>

      {validacaoCalculo ? <Calculo valor={valorAtual} porcentagem={aumento}/> : <></>}
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '150',
    height: '150'
  },
  input: {
    borderWidth: 1.7,
    fontSize: 20,
    color: '#ED145B',
    borderRadius: 10,
    borderColor: '#ED145B',
  },
  divInput: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
  },

});
