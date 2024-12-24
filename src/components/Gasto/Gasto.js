import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { styleGasto } from "./styleGasto";
import { formatearCantidad, generarFecha } from "../../helpers";
import { diccionarioIconos } from "../../helpers/diccionarioIconos";

export default function Gasto({gasto, setModal, setGasto}) {

    const { nombreGasto, cantidad, categoria, fecha } = gasto

    const handleAcciones = () => {
        setModal(true)
        setGasto(gasto)
    }

    return(
        <Pressable onLongPress={handleAcciones}>
            <View style={styleGasto.contenedor}>
                <View style={styleGasto.contenido}>
                    <View style={styleGasto.contenedorImagen}>
                        <Image source={diccionarioIconos[categoria]} style={styleGasto.imagen}/>
                    
                        <View style={styleGasto.contenedorTexto}>
                            <Text style={styleGasto.textCategoria}>
                                {categoria}
                            </Text>
                            <Text style={styleGasto.textNombre}>
                                {nombreGasto}
                            </Text>
                            <Text style={styleGasto.textFecha}>
                                {generarFecha(fecha)}
                            </Text>
                        </View>
                    </View>
                    <Text style={styleGasto.textCantidad}>
                            {formatearCantidad(cantidad)}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}