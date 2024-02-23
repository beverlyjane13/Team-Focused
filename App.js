import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Helloworld from './component/Helloworld';
import Username from './component/Username';
import Counter from './component/Counter';

const App = () => {
  return (
    <View style={styles.container}>
      <Helloworld/>
      <Username/>
      <Counter/>

      
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
});

export default App