import AsyncStorage from "@react-native-async-storage/async-storage"

export const obtenerPresupuestoStorage = async (setPresupuesto, setIsValidPresupuesto) => {

    try{

      const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0
      
      if(presupuestoStorage > 0) {
        setPresupuesto(JSON.parse(presupuestoStorage))
        setIsValidPresupuesto(true)
      }

    } catch (error) {
      console.log(error)
    }

  }

  export const almacenarAS = async (presupuesto) => {
      
    if(isValidPresupuesto){
      const guardarPresuestoStorage = async () => {

        try{
          await AsyncStorage.setItem('planificador_presupuesto', JSON.stringify(presupuesto))

        } catch (error){
          console.log(error)
        }

      }
      guardarPresuestoStorage()
    }
  }

  export const obtenerGastosStorage = async (setGastos) => {
  
        try{
          const gastosStorage = await AsyncStorage.getItem('planificador_gastos') ?? []
          
          setGastos( gastosStorage ? JSON.parse(gastosStorage) : [])
          
        } catch (error) {
          console.log(error)
        }
      }

export const guardarGastosStorage = async (gastos) => {

    try{

      await AsyncStorage.setItem('planificador_gastos', JSON.stringify(gastos))

    } catch (error) {
      console.log(error)
    }

  }

export const guardarEventosStorage = async (eventos) => {

  try{
    await AsyncStorage.setItem('eventos', JSON.stringify(eventos))

  } catch (error) {
    console.log(error)
  }
}

export const obtenerEventosStorage = async (setEventos) => {

  try{
    const eventosStorage = await AsyncStorage.getItem('eventos')
    setEventos(eventosStorage ? JSON.parse(eventosStorage) : [])

  } catch (error) {
    console.log(error)
  }
}