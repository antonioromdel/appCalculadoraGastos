import React from "react"
import { Text, View  } from "react-native"
import { stylesHeader } from "./stylesHeader"

export default function Header() {

    return (
        <View style={stylesHeader.header}>
            <Text style={stylesHeader.texto}>Planificador de gastos</Text>
        </View>
    )
}