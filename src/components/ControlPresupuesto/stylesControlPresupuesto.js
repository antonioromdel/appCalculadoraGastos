import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const stylesControlPresupuesto = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor
    },
    centrarGrafica: {
        alignItems: 'center'
    },
    btn: {
     backgroundColor: '#db2777',
     padding: 10,
     marginTop: 15,
     borderRadius: 5
        
    },
    textBtn: {
        textAlign:'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'

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