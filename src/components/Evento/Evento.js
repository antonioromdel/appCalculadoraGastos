import { View, Text, Pressable } from "react-native";
import { styleEvento } from "./styleEvento";
import { formatearCantidad } from "../../helpers";

export default function Evento ({evento, handleEvento, deleteEvento}) {

    return(
        <Pressable
         onPress={() => handleEvento(evento)}
         onLongPress={() => deleteEvento(evento.id)}
        >
            <View style={styleEvento.contenedor}>
                <Text style={styleEvento.label}>Presupuesto:</Text>
                <View style={styleEvento.contenedorDescripcion}>
                    <Text style={styleEvento.description}>{evento.descripcionPresupuesto}</Text>
                    <Text style={[styleEvento.description, styleEvento.textPresupuesto]}>{formatearCantidad(evento.presupuesto)}</Text>
                </View>
            </View>
        </Pressable>
    )
}