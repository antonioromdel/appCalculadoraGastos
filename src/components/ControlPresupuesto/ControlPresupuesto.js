import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { stylesControlPresupuesto } from "./stylesControlPresupuesto";
import { formatearCantidad } from "../../helpers";

export default function ControlPresupuesto({
    presupuesto, 
    gastos,  
    volverPresupuesto,
    descripcionPresupuesto,
    idPresupuesto}) {

    const [ disponible, setDisponible] = useState(0)
    const [ gastado, setGastado] = useState(0)
    const [ porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.idPresupuesto === idPresupuesto ? Number(gasto.cantidad) + total : total, 0)
        const totalDisponible = presupuesto - totalGastado
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)

        const newPorcentaje = (((presupuesto - totalDisponible ) / presupuesto) * 100)
        setPorcentaje(newPorcentaje.toFixed(2))
        
    }, [gastos, idPresupuesto])

    return(
        <View style={stylesControlPresupuesto.contenedor}>
            <Text style={stylesControlPresupuesto.title}>{descripcionPresupuesto}</Text>
            <View style={stylesControlPresupuesto.centrarGrafica}>
                <Text>{porcentaje}% Gastado</Text>
            </View>
            <View style={stylesControlPresupuesto.contenedorTexto}>
                <Text style={stylesControlPresupuesto.valor}>
                    <Text style={stylesControlPresupuesto.label}>Presupuesto: </Text>{formatearCantidad(presupuesto)}
                </Text>
                <Text style={stylesControlPresupuesto.valor}>
                    <Text style={stylesControlPresupuesto.label}>Disponible: </Text>{formatearCantidad(disponible)}
                </Text>
                <Text style={stylesControlPresupuesto.valor}>
                    <Text style={stylesControlPresupuesto.label}>Gastado: </Text>{formatearCantidad(gastado)}
                </Text>

                <Pressable style={[stylesControlPresupuesto.btn, stylesControlPresupuesto.btnVolver]}
                    onPress={volverPresupuesto}
                >
                    <Text style={stylesControlPresupuesto.textBtn}>Volver a presupuestos</Text>
                </Pressable>
            </View>
        </View>
    )
}