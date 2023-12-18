import fs from 'fs/promises'
import path from 'path'

interface Tarea {
  id: number
  description: string
  is_done: boolean
}

export const saveTareasArchivo = async (tareas: Tarea[]) => {
  const filePath = './tareas.json'

  try {
    await fs.writeFile(filePath, JSON.stringify({tareas}))
    console.log('Tareas guardadas correctamente')
  } catch (e) {
    console.log('Error al guardar las tareas: ', e)
  }
  
}

export const getTasksFromFile = async (): Promise<Tarea[]> => {
  const filePath = path.resolve('./tasks.json');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const tasksData = JSON.parse(data);
    return tasksData.tasks || [];
  } catch (error) {
    console.error('Error al leer las tareas:', error);
    return [];
  }
};