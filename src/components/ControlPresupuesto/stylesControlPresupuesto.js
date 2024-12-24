import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const stylesControlPresupuesto = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    imagen: {
        width: 250,
        height: 250
    },
    contenedorTexto: {
        marginTop: 30
    },
    valor:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    label: {
        fontWeight: '700',
        color: '#3b82f6'
    }

})