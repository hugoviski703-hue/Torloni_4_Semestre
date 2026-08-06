import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './Styles';



export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}>
          <Text style={styles.textoHello}>HelloExpo</Text>
          <Text style={styles.teste}>As BB QUER GIMm</Text>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>



  );
}




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
