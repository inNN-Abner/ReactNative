import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StyledInput from '../components/input';
import StyledButton from '../components/button';
import { router } from 'expo-router';

export default function Login() {

  const handleLogin = () => {
    router.replace('home')
  }

  return (
    <View style={styles.container}>
      <Text>Turma da mônica</Text>

      <Image source={{ uri: 'https://seeklogo.com/images/T/turma-da-monica-logo-CB3615F253-seeklogo.com.png' }}
      style={styles.image} />

      <StyledInput placeholder='Digite seu usuário' onChangeText={(text) => console.log(text)}/>
      <StyledInput placeholder='Digite sua senha' onChangeText={(text) => console.log(text)}/>

      <StyledButton text='Entrar' onPress={handleLogin} color= 'red' />
      <StatusBar style="auto" />
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
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
})