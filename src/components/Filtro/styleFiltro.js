import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const styleFiltro = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        paddingVertical: 20
    },
    label: {
        fontSize: 22,
        fontWeight: '900',
        color: '#64748b',
        textAlign: 'center'
    },
    miPicker: {
        marginTop: 15
    }
})