import React from "react";
import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const styleGasto = StyleSheet.create({
    contenedor: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textNombre: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#3b82f6',
        marginBottom: 5
    },
    textCantidad: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 20
    },
    contenedorTexto: {

    },
    textCategoria: {
        textTransform: 'uppercase',
        color:'#94a3b8',
        marginBottom: 5
    },
    contenedorImagen:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textFecha: {
        fontWeight: '700',
        color: '#db2777'
    }
})