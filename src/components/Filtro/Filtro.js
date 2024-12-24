import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styleFiltro } from "./styleFiltro";
import { Picker } from "@react-native-picker/picker";


export default function Filtro({filtro, setFiltro, gastos, setGastosFiltros}) {

    useEffect(() => {
        if(filtro === ''){
            setGastosFiltros([])
        } else {
            const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
            setGastosFiltros(gastosFiltrados)
        }

    }, [filtro])

    return(
        <View style={styleFiltro.contenedor}> 
            <Text style={styleFiltro.label}>Filtrar gastos</Text>

            <Picker 
                style={styleFiltro.miPicker}
                selectedValue={filtro}
                onValueChange={(valor) => {
                    setFiltro(valor)
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
    )
}