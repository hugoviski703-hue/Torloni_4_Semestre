import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./Styles"

import { FormTask } from "./components/formTask/FormTask"
import { Header } from "./components/Header/Header"

function App(){
    return (
        <SafeAreaProvider>
        <SafeAreaView style={Styles.safeArea}>
            <Header/>
            <FormTask/>
             <View style={Styles.container}>
            <Text>
                My app
                <StatusBar style="auto" />
            </Text>
        </View>
        </SafeAreaView>
        </SafeAreaProvider>
       
    )
}



export default App