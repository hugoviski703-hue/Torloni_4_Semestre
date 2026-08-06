import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./Styles"
import { Header } from "./components/Header/Header"
import { FrmCadTask } from "./components/FrmCadTask/FrmCadTask"

function App(){
    return (
        <SafeAreaProvider>
        <SafeAreaView style={Styles.safeArea}>
            <Header/>
            <FrmCadTask/>
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