import React, {useState} from 'react'

interface NuevaTareaProps {
  onAgregarTarea: (tarea: Tarea) => void
}

interface Tarea {
  id: number
  description: string
  is_done: boolean
}

function AgregarTarea({onAgregarTarea}: NuevaTareaProps) {
  const [nuevaTarea, setNuevaTarea] = useState<string>('')
  const handleAgregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      const tarea: Tarea = {
        id: Date.now(),
        description: nuevaTarea,
        is_done: false
      }

      onAgregarTarea(tarea)
      setNuevaTarea('')
    }
  }
  return (
    <div>
      <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
      <button onClick={handleAgregarTarea}>Agregar Tarea</button>
    </div>
  )
}

export default AgregarTarea