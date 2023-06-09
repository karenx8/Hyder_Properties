/* REFERENCES
    Tech, D. (2022). How to use React Native with Firebase.
    YouTube. Available at: https://www.youtube.com/watch?v=NFbMfVTtq10
    [Accessed 4 Jun. 2023].
*/

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from "react-native"
import { collection, onSnapShot } from 'firebase/firestore'
// replace "testDB" with relevant database
import { testDB } from "./src/config/firebase"

export default function CreateUser() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const usersQuery = collection(testDB, 'users')
        onSnapShot(usersQuery, (snapShot) => {
            let usersList = []
            snapShot.docs.map((doc) => usersList.push({...doc.data(), id: doc.id}))
            setUser(usersList)
            setLoading(false)
        })
    }, [])

    const renderItem = ({item}) => (
        <View style={{ marginTop: 25}}>
            <Text>(item.name)</Text>
        </View>
    )

    console.log(user)

    return (
        <View style={StyleSheet.container}>
            <Text>FireBase Example</Text>
            <FlatList
                data={user}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    }
})