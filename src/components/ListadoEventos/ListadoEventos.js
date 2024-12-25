import { View, Text } from "react-native";
import Evento from "../Evento/Evento";
import { styleListadoEventos } from "./styleListadoEventos";

export default function ListadoEventos ({eventos, handleEvento, deleteEvento}) {

    return(
        <View>
            <Text style={styleListadoEventos.title}>Listado de presupuestos</Text>
            <Text style={styleListadoEventos.text}>* Mantén presionado sobre un presupuesto para eliminar.</Text>

            {
                eventos.length === 0 ? (
                    <Text style={styleListadoEventos.textNoListado}>No hay presupuestos guardados</Text>
                ) : (
                    eventos.map(evento => (
                        <Evento
                            key={evento.id}
                            evento={evento}
                            handleEvento={handleEvento}
                            deleteEvento={deleteEvento}
                        />
                    ))
                )
            }
        </View>
    )
}