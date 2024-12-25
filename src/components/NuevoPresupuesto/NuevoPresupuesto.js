import React from "react"
import { Text, View, TextInput, Pressable } from "react-native"
import { stylesNuevoPresupuesto } from "./stylesNuevoPresupuesto"


export default function NuevoPresupuesto ({
    handleNuevoPresupuesto, 
    presupuesto, 
    setPresupuesto,
    descripcionPresupuesto,
    setDescripcionPresupuesto,
    resetearApp}) {

  return (
    <View style={stylesNuevoPresupuesto.contenedor}>
        <Pressable style={stylesNuevoPresupuesto.btn}
                            onPress={resetearApp}
                        >
                            <Text style={stylesNuevoPresupuesto.textBtn}>Resetear App</Text>
                        </Pressable>
        <Text style={stylesNuevoPresupuesto.label}>Definir presupuesto: </Text>
        <TextInput 
            keyboardType="numeric"
            placeholder="Añade tu presupuesto. Ej: 2000"
            style={stylesNuevoPresupuesto.input}
            value={presupuesto.toString()}
            onChangeText={setPresupuesto}
        />

        <Text style={stylesNuevoPresupuesto.label}>Descripción</Text>
        <TextInput 
            keyboardType='default'
            placeholder="Ej: Noviembre, cena empresa, etc..."
            style={stylesNuevoPresupuesto.input}
            value={descripcionPresupuesto.toString()}
            onChangeText={setDescripcionPresupuesto}
        />

        <Pressable 
            style={stylesNuevoPresupuesto.boton}
            onPress={() => handleNuevoPresupuesto({presupuesto, descripcionPresupuesto})}
        >
            <Text style={stylesNuevoPresupuesto.btnTexto}>
                Crear nuevo presupuesto
            </Text>
        </Pressable>
    </View>
  )
}
