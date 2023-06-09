/* REFERENCES
    Programming with Mosh (2020). React Native Tutorial for Beginners - Build a React Native App.
    YouTube. Available at: https://www.youtube.com/watch?v=0-S5a0eXPoc&t=6361s
    [Accessed 4 Jun. 2023].
*/

import React from 'react';
import { ImageBackground, View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default function HomeScreen() {
    return (
        <ImageBackground                                            
            style={styles.background}
            source={require('../Assets/Welcome-Background.jpg')}
        >
            <View style={styles.logoView}>                          
                <Image source={require('../Assets/HP-Logo.png')}/>
                <Text>Welcome to</Text>
                <Text>Hyper Properties App</Text>
            </View>
            <View style={styles.buttonView1}>
                <View/>
                    <TouchableOpacity onPress= {() => console.log("Browse Button Tapped")}>
                        <View
                        style={styles.browseButton}
                        >
                            <Text>Browse</Text>
                        </View>
                    </TouchableOpacity>
                <View/>
            </View>
            <View style={styles.buttonView2}>
                <TouchableOpacity onPress= {() => console.log("Login Button Tapped")}>
                    <View
                    style={styles.loginButton}
                    >
                        <Text>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress= {() => console.log("Register Button Tapped")}>
                    <View
                    style={styles.registerButton}
                    >
                        <Text>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoView: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },

    buttonView1: {
        flex: 1,
        flexDirection: 'row',
        top: 470, 
    },
    browseButton: {
        width: 150,
        height: 70,
        backgroundColor: '#047FB3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
    },
    buttonView2: {
        flex: 1,
        flexDirection: 'row',
        top: 200, 
    },
    loginButton: {
        width: 150,
        height: 70,
        left: -10,
        backgroundColor: '#047FB3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
    },
    registerButton: {
        width: 150,
        height: 70,
        right: -10,
        backgroundColor: '#047FB3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 45,
    }
})



