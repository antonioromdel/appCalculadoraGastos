import { StyleSheet } from "react-native";
import globalStyles from "../../styles";

export const styleFormularioGasto = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1e40af',
        flex: 1,
        
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnClose: {
        backgroundColor: '#db2777',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        flex: 1
    },
    textBtnClose: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748b'
    },
    campo: {
        marginVertical: 10
    },
    label: {
        color: '#64748b',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    submitBtn:{
        backgroundColor: '#3b82f6',
        padding: 10,
        marginTop: 10
    },
    textBtn: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    btnDelete: {
        backgroundColor: 'red'
    }
})