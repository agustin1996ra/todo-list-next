'use client'
import React, {useState} from 'react'

import AgregarTarea from './AgregarTarea'
import ListaTareas from './ListaTareas'
import { getTasksFromFile, saveTareasArchivo } from '../tareas'



interface TareasWrProps {
  tareasInicio: Tarea[]
}

interface Tarea {
  id: number
  description: string
  is_done: boolean
}

function TareasWr({tareasInicio}: TareasWrProps) {

  const [tareas, setTareas] = useState<Tarea[]>(tareasInicio)

  
  
  const handleAgregarTarea = (tarea: Tarea) => {
    const tareasActualizadas = [...tareas, tarea]
    setTareas(tareasActualizadas)

    saveTareasArchivo(tareasActualizadas)
  }
  
  

  return (
    <div>
      <AgregarTarea onAgregarTarea={handleAgregarTarea} />
      <ListaTareas tareas={tareas} />

    </div>
  )
}

export default TareasWr

export async function getStaticProps() {

  const tareasInicio = await getTasksFromFile()

  return { props: {tareasInicio}}
}