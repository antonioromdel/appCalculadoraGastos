import { StyleSheet, Text, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto';
import { useEffect, useState } from 'react';
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos/ListadoGastos';
import Filtro from './src/components/Filtro/Filtro';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [ gastos, setGastos] = useState([])
  const [ modal, setModal] = useState(false)
  const [gasto, setGasto] = useState({})
  const [ filtro, setFiltro ] = useState('')
  const [ gastosFiltros, setGastosFiltros ] = useState([])

  useEffect(() => {

    const obtenerPresupuestoStorage = async () => {

      try{

        const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0
        
        if(presupuestoStorage > 0) {
          setPresupuesto(presupuestoStorage)
          setIsValidPresupuesto(true)
        }

      } catch (error) {
        console.log(error)
      }

    }

    obtenerPresupuestoStorage()

  }, [])

  useEffect(() => {
    const almacenarAS = async () => {
      
      if(isValidPresupuesto){
        const guardarPresuestoStorage = async () => {

          try{
            await AsyncStorage.setItem('planificador_presupuesto', presupuesto)

          } catch (error){
            console.log(error)
          }

        }
        guardarPresuestoStorage()
      }
    }

    almacenarAS()

  }, [isValidPresupuesto])

  useEffect(() => {

    const obtenerGastosStorage = async () => {

      try{
        const gastosStorage = await AsyncStorage.getItem('planificador_gastos') ?? []
        
        setGastos( gastosStorage ? JSON.parse(gastosStorage) : [])
        
      } catch (error) {
        console.log(error)
      }
    }

    obtenerGastosStorage()

  }, [])


  useEffect(() => {

    const guardarGastosStorage = async () => {

      try{

        await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))

      } catch (error) {
        console.log(error)
      }

    }

    guardarGastosStorage()

  }, [gastos])


  const handleNuevoPresupuesto = (presupuesto) => {
    if(Number(presupuesto) > 0) {
      setIsValidPresupuesto(true)
    } else {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', [
        {
          text: 'Ok'
        }
      ])
    }
  }

  const handleGasto = (gasto) => {
    if([gasto.nombreGasto, gasto.categoria, gasto.cantidad].includes('')){
      Alert.alert('Error', 'Todos los campos son obligatorios.')
      return
    }

    if(gasto.id) {
      const gastosActualizados = gastos.map( editGasto => editGasto.id === gasto.id ? gasto : editGasto)
      setGastos(gastosActualizados)

    } else {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])

    }
    setModal(!modal)
    
  }

  const deleteGasto = (id) => {
    Alert.alert('Eliminar gasto', '¿Desea eliminar el gasto?', [{
      text: 'No', style: 'cancel'
    },
    {
      text: 'Si',
      onPress: () => { 
        const nuevosGastos = gastos.filter(gastoBorrar => gastoBorrar.id !== id)
        setGastos(nuevosGastos)
        setGasto({})
        setModal(false)
      }
    }
      
    ])
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <Header />
        {
          isValidPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />
          
          ) : 
          
          (
            <NuevoPresupuesto 
              handleNuevoPresupuesto={handleNuevoPresupuesto}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
          )
        }
      </View>

      {
        isValidPresupuesto && (
          <>
            <Filtro 
              setFiltro={setFiltro}
              filtro={filtro}
              gastos={gastos}
              setGastosFiltros={setGastosFiltros}
            />
            <ListadoGastos 
              gastos={gastos}
              setModal={setModal}
              setGasto={setGasto}
              filtro={filtro}
              gastosFiltros={gastosFiltros}
            />
          </>
        )
      }
      </ScrollView>
      {modal && (
        <Modal
        animationType='slide'
          visible={modal}
        >
          <FormularioGasto 
            setModal={setModal}
            handleGasto={handleGasto}
            setGasto={setGasto}
            gasto={gasto}
            deleteGasto={deleteGasto}
          />

        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable onPress={() => setModal(!modal)}>
          <Image 
          source={require('./src/img/nuevo-gasto.png')} 
          style={styles.imagen}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50
  },
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});
