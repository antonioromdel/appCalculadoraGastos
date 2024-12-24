import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const stylesNuevoPresupuesto = StyleSheet.create({
    contenedor: {
       ...globalStyles.contenedor
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center'
    },
    label: {
        textAlign: 'center',
        fontSize: 24,
        color: '#3b82f6',
        marginBottom: 25
    },
    boton: {
        marginTop: 30,
        backgroundColor: '#1048A4',
        padding: 10,
        borderRadius: 10

    }, 
    btnTexto: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})