import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Signup_Style';
import LinearGradient from 'react-native-linear-gradient';
//import {NavigationContainer} from '@react-navigation/native';
import { Actions } from 'react-native-router-flux';

export default function Signup() {
    return (
        //  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <>
            <View style={styles.box1}>
                <Image
                    style={styles.stretch}
                    source={require('../../assets/favicon.png')} />
                <Text style={styles.login1}>RAJALAKSHMI AGENCIES</Text>
            </View>
            {/* <ScrollView> */}
            
                <ScrollView style={styles.box}>

                    <View style={styles.container}>

                        <Text style={styles.login}>Sign Up</Text>
                        <TextInput
                            style={styles.username}
                            placeholder='Username' />
                        <TextInput
                            style={styles.username}
                            placeholder='Email' />
                        <TextInput
                            style={styles.username}
                            secureTextEntry
                            placeholder="Password" />
                        <TextInput
                            style={styles.username}
                            placeholder='Phone no.' />
                        <TextInput
                            style={styles.username}
                            placeholder='Address' />
                        <TextInput
                            style={styles.username}
                            placeholder='Aadhar' />
                    </View>
                    <TouchableOpacity style={styles.log}>
                        <Text style={styles.logbtn}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forget}>Already have an account? Sign In</Text>
                    </TouchableOpacity>


                </ScrollView>
            {/* </ScrollView> */}
        </>
    )
}