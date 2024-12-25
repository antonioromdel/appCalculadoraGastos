import React from "react";
import { View, Text } from "react-native";
import { styleListadoGastos } from "./styleListadoGastos";
import Gasto from "../Gasto/Gasto";

export default function ListadoGastos ({
    gastos, 
    setModal, 
    setGasto, 
    filtro, 
    gastosFiltros,
    idPresupuesto}) {

    return (
        <View style={styleListadoGastos.contenedor}>
            <Text style={styleListadoGastos.titulo}>Listado de gastos</Text>

            { filtro ? gastosFiltros.map(gasto => gasto.idPresupuesto === idPresupuesto && (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setModal={setModal}
                setGasto={setGasto}
            />
            )) : gastos.map(gasto => gasto.idPresupuesto === idPresupuesto && (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setModal={setModal}
                setGasto={setGasto}
            />
            ))}

            { 
                   
                ((gastos.length === 0 || (gastosFiltros.length === 0 && !!filtro)) || (gastos.filter( gasto => gasto.idPresupuesto === idPresupuesto).length === 0)) && (
                    <Text style={styleListadoGastos.textNoGastos}>
                        No hay gastos
                    </Text>
                )
            }

        </View>
    )
}