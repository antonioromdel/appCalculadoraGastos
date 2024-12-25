import { StyleSheet } from "react-native";

export const styleEvento = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#64748b'
    },
    description: {
        fontSize: 20,
        fontWeight: 'bold'

    },
    contenedor: {
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },
    contenedorDescripcion:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-around',
        padding: 20
    },
    textPresupuesto: {
        color: 'blue'
    }
})