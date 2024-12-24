import React from "react";
import { View, Text } from "react-native";
import { styleListadoGastos } from "./styleListadoGastos";
import Gasto from "../Gasto/Gasto";

export default function ListadoGastos ({gastos, setModal, setGasto, filtro, gastosFiltros}) {

    return (
        <View style={styleListadoGastos.contenedor}>
            <Text style={styleListadoGastos.titulo}>Listado de gastos</Text>

            { filtro ? gastosFiltros.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setModal={setModal}
                setGasto={setGasto}
            />
            )) : gastos.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setModal={setModal}
                setGasto={setGasto}
            />
            ))}

            { (gastos.length === 0 || (gastosFiltros.length === 0 && !!filtro)) && (
                <Text style={styleListadoGastos.textNoGastos}>
                    No hay gastos
                </Text>
            )}

        </View>
    )
}