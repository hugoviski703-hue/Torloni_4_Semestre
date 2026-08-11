import { StatusBar } from "expo-status-bar"
import {  View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { Styles } from "./Styles"
import { FormTask } from "./components/formTask/FormTask"
import { Header } from "./components/Header/Header"
import { TaskList } from "./components/tasklist/TaskList"

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles.safeArea}>
                <View style={Styles.container}>
                    <Header />
                    <FormTask />
                    <TaskList>

                    </TaskList>

                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}



export default App