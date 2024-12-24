import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styleFormularioGasto } from "./styleFormularioGasto";
import { styleGasto } from "../Gasto/styleGasto";

export default function FormularioGasto({setModal, handleGasto, setGasto, gasto, deleteGasto}) {

    const [ nombreGasto, setNombreGasto ] = useState('')
    const [ cantidad, setCantidad ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ id, setId ] = useState('')
    const [ fecha, setFecha ] = useState('')

    useEffect(() => {
        if(gasto?.nombreGasto){
            setNombreGasto(gasto.nombreGasto)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setId(gasto.id)
            setFecha(gasto.fecha)
        }

    }, [gasto])
    

    return(
        <View style={styleFormularioGasto.contenedor}>

            <View style={styleFormularioGasto.btns}>
                <Pressable
                    onPress={() => {
                        setModal(false)
                        setGasto({})
                    }}
                    style={styleFormularioGasto.btnClose}
                >
                    <Text style={styleFormularioGasto.textBtnClose}>Cerrar</Text>
                </Pressable>
                {
                    gasto.id && (
                        <Pressable 
                            style={[styleFormularioGasto.btnClose, styleFormularioGasto.btnDelete]}
                            onPress={() => deleteGasto(gasto.id)}
                        >

                            <Text style={styleFormularioGasto.textBtnClose}>Eliminar Registro</Text>
                        </Pressable>
                    )
                }

            </View>
            
            <View style={styleFormularioGasto.formulario}>
                <Text style={styleFormularioGasto.titulo}>
                    {gasto?.nombreGasto ? 'Editar gasto' : 'Nuevo gasto'} 
                </Text>
                <View style={styleFormularioGasto.campo}>
                    <Text style={styleFormularioGasto.label}>Nombre gasto</Text>
                    <TextInput 
                        placeholder="Nombre del gasto. Ej: comida"
                        style={styleFormularioGasto.input}
                        value={nombreGasto}
                        onChangeText={setNombreGasto}
                    />
                </View>
                <View style={styleFormularioGasto.campo}>
                    <Text style={styleFormularioGasto.label}>Cantidad gasto</Text>
                    <TextInput 
                        keyboardType="numeric"
                        placeholder="Cantidad del gasto. Ej: 10"
                        style={styleFormularioGasto.input}
                        value={cantidad}
                        onChangeText={setCantidad}
                    />
                </View>
                <View style={styleFormularioGasto.campo}>
                    <Text style={styleFormularioGasto.label}>Categoría gasto</Text>
                    <Picker 
                        style={styleFormularioGasto.input}
                        selectedValue={categoria}
                        onValueChange={(value) => {
                            setCategoria(value)
                        }}
                    >
                        <Picker.Item label="-- Seleccione --" value="" />
                        <Picker.Item label="Ahorro" value="ahorro" />
                        <Picker.Item label="Comida" value="comida" />
                        <Picker.Item label="Casa" value="casa" /> 
                        <Picker.Item label="Gastos varios" value="gastos" /> 
                        <Picker.Item label="Ocio" value="ocio" /> 
                        <Picker.Item label="Salud" value="salud" /> 
                        <Picker.Item label="Suscripciones" value="suscripciones" /> 
                    </Picker>
                </View>

                <Pressable 
                    style={styleFormularioGasto.submitBtn}
                    onPress={() => handleGasto({nombreGasto, cantidad, categoria, id, fecha})}
                >
                    <Text style={styleFormularioGasto.textBtn}>
                    {gasto?.nombreGasto ? 'Guardar Cambios' : 'Agregar gasto'} 
                    </Text>
                </Pressable>
            </View>

        </View>
    ) 
}