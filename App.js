import { StyleSheet, View, Alert, Pressable, Image, Modal, ScrollView } from 'react-native';
import Header from './src/components/Header/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto/NuevoPresupuesto';
import { useEffect, useState } from 'react';
import ControlPresupuesto from './src/components/ControlPresupuesto/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto/FormularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos/ListadoGastos';
import Filtro from './src/components/Filtro/Filtro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { almacenarAS, guardarEventosStorage, guardarGastosStorage, obtenerEventosStorage, obtenerGastosStorage, obtenerPresupuestoStorage } from './src/data/data';
import ListadoEventos from './src/components/ListadoEventos/ListadoEventos';

export default function App() {

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [descripcionPresupuesto, setDescripcionPresupuesto] = useState('')
  const [idPresupuesto, setIdPresupuesto] = useState('')
  const [eventos, setEventos] = useState([])
  const [ gastos, setGastos] = useState([])
  const [ modal, setModal] = useState(false)
  const [ gasto, setGasto ] = useState({})
  const [ filtro, setFiltro ] = useState('')
  const [ gastosFiltros, setGastosFiltros ] = useState([])

  useEffect(() => {
    obtenerPresupuestoStorage(setPresupuesto, setIsValidPresupuesto)
  
  }, [])

  useEffect(() => {
    almacenarAS(presupuesto)

  }, [isValidPresupuesto])

  useEffect(() => {
    obtenerGastosStorage(setGastos)

  }, [])

  useEffect(() => {
    guardarGastosStorage(gastos)

  }, [gastos])

  useEffect(() => {
    guardarEventosStorage(eventos)

  }, [eventos])

  useEffect(() => {
    obtenerEventosStorage(setEventos)

  }, [])

  const handleEvento = (evento) => {
    setIsValidPresupuesto(true)
    setPresupuesto(evento.presupuesto)
    setDescripcionPresupuesto(evento.descripcionPresupuesto)
    setIdPresupuesto(evento.id)
  }


  const handleNuevoPresupuesto = (evento) => {
    if(Number(evento.presupuesto) <= 0) {
      Alert.alert('Error', 'El presupuesto no puede ser 0 o menor', [
        {
          text: 'Ok'
        }
      ])
    } else if(evento.descripcionPresupuesto.trim() === '') {
      Alert.alert('Error', 'La descripción no puede estar vacía.', [
        {
          text: 'OK'
        }
      ])
    } else {
      setIsValidPresupuesto(true)
      evento.id = generarId()
      setIdPresupuesto(evento.id)
      setEventos([...eventos, evento])
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
      gasto.idPresupuesto = idPresupuesto
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

  const resetearApp = () => {
    Alert.alert('¿Desea reiniciar la aplicación?', 'Esto eliminará todos los datos guardados.', [
      {
        text: 'NO'
      },
      {
        text: 'Si, eliminar.',
        onPress: async () => {
          try{
            await AsyncStorage.clear()
            setIsValidPresupuesto(false)
            setPresupuesto(0)
            setGastos([])
            setDescripcionPresupuesto('')
            setEventos([])
          } catch (error) {
            console.log(error)
          }

        }
      }
    ])
  }

  const volverPresupuesto = () => {
    setIsValidPresupuesto(false)
    setPresupuesto(0)
    setDescripcionPresupuesto('')
    setFiltro('')
  }

  const deleteEvento = (id) => {
    Alert.alert('¿Desea eliminar este presupuesto?', 'Una vez borrado no se podrá recuperar.', [
      {
        text: 'No'
      },
      {
        text: 'Si, eliminar.',
        onPress: () => {
          const newEventos = eventos.filter(evento => evento.id !== id)
          const newGastos = gastos.filter(gasto => gasto.idPresupuesto !== id)
          setGastos(newGastos)
          setEventos(newEventos)
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
              resetearApp={resetearApp}
              volverPresupuesto={volverPresupuesto}
              descripcionPresupuesto={descripcionPresupuesto}
              idPresupuesto={idPresupuesto}
            />
          
          ) : 
          
          (
            <>
              <NuevoPresupuesto 
                handleNuevoPresupuesto={handleNuevoPresupuesto}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                descripcionPresupuesto={descripcionPresupuesto}
                setDescripcionPresupuesto={setDescripcionPresupuesto}
                resetearApp={resetearApp}
              />

              <ListadoEventos 
                eventos={eventos}
                handleEvento={handleEvento}
                deleteEvento={deleteEvento}
              />
            </>
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
              idPresupuesto={idPresupuesto}
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
