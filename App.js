import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: 'red' 
        }}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple'
      }}>
      <Text>Search</Text>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
      }}>
        <Text>list</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
