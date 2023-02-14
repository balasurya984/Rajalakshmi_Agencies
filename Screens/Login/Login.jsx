import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import LinearGradient from 'react-native-linear-gradient';
//import {NavigationContainer} from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';

export default function Login()
{
    const goToSignup = () => {
        Actions.signup()
     }
    return(
      //  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <>
            <View style={styles.box1}>
            <Image
                style={styles.stretch}
                source={require('../../assets/favicon.png')} />
                <Text style={styles.login1}>RAJALAKSHMI AGENCIES</Text>
            </View>
            <View style={styles.box}>

                <View style={styles.container}>

                    <Text style={styles.login}>Sign In</Text>
                    <TextInput
                        style={styles.username}
                        placeholder='Email' />
                    <TextInput
                        style={styles.username}
                        secureTextEntry
                        placeholder="Password" />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forget}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.log}>
                    <Text style={styles.logbtn}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {goToSignup}>
                    <Text style={styles.forget}>Sign Up</Text>
                </TouchableOpacity>


            </View></>
    )
}