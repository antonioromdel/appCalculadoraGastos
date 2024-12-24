import React from "react"
import { Text, View, TextInput, Pressable } from "react-native"
import { stylesNuevoPresupuesto } from "./stylesNuevoPresupuesto"


export default function NuevoPresupuesto ({handleNuevoPresupuesto, presupuesto, setPresupuesto}) {

  return (
    <View style={stylesNuevoPresupuesto.contenedor}>
        <Text style={stylesNuevoPresupuesto.label}>Definir presupuesto: </Text>
        <TextInput 
            keyboardType="numeric"
            placeholder="Añade tu presupuesto. Ej: 2000"
            style={stylesNuevoPresupuesto.input}
            value={presupuesto.toString()}
            onChangeText={setPresupuesto}
        />

        <Pressable 
            style={stylesNuevoPresupuesto.boton}
            onPress={() => handleNuevoPresupuesto(presupuesto)}
        >
            <Text style={stylesNuevoPresupuesto.btnTexto}>
                Agregar presupuesto
            </Text>
        </Pressable>
    </View>
  )
}
