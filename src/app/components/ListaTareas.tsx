import React from 'react'

interface Tarea {
  id: number
  description: string
  is_done: boolean
}

interface ListaTareasProps {
  tareas: Tarea[]
}

function ListaTareas ({tareas}: ListaTareasProps) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>{tarea.description}</li>
      ))}
    </ul>
  )
}

export default ListaTareas