import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const stylesControlPresupuesto = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    title: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        color:'blue',
        marginBottom: 15
    },
    btnVolver: {
        backgroundColor:'blue'
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
    },
    textBtn: {
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },
    btn: {
     backgroundColor: '#db2777',
     padding: 10,
     marginTop: 15,
     borderRadius: 5
        
    }

})