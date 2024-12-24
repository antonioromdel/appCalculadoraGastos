import React, { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { stylesControlPresupuesto } from "./stylesControlPresupuesto";
import { formatearCantidad } from "../../helpers";

export default function ControlPresupuesto({presupuesto, gastos, resetearApp}) {

    const [ disponible, setDisponible] = useState(0)
    const [ gastado, setGastado] = useState(0)
    const [ porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => Number(gasto.cantidad) + total, 0)
        const totalDisponible = presupuesto - totalGastado
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)

        const newPorcentaje = (((presupuesto - totalDisponible ) / presupuesto) * 100)
        setPorcentaje(newPorcentaje.toFixed(2))
        
    }, [gastos])

    return(
        <View style={stylesControlPresupuesto.contenedor}>
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

                <Pressable style={stylesControlPresupuesto.btn}
                    onPress={resetearApp}
                >
                    <Text style={stylesControlPresupuesto.textBtn}>Reiniciar App</Text>
                </Pressable>
            </View>
        </View>
    )
}