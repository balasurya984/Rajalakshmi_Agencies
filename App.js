import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';


export default function App() {
  return (
    <>
    <View>
      {/* <Login /> */}
      <Signup />
    </View><View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
      </View></>
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
