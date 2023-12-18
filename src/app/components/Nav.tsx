import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-tres p-6">
      <div className="flex items-center flex-shrink-0 text-cinco mr-6">
        <svg className='fill-cinco me-3' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"/></svg>
        <Link href="/" className="font-semibold text-cinco text-xl tracking-tight hover:text-dos">Lista de Tareas</Link>
      </div>
      
      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-sm sm:flex-grow">
          <Link href="/TareasSinCompletar" className="block mt-4 sm:inline-block sm:mt-0 text-cinco hover:text-dos mr-4">
            Tareas sin completar
          </Link>
          <Link href="#responsive-header" className="block mt-4 sm:inline-block sm:mt-0 text-cinco hover:text-dos mr-4">
            Tareas completas
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Nav