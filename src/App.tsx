import { useState } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import logoLobos from './assets/logoLobos.jpg'


function App() {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center'>
        <a href="" target="_blank">
          <img src={logoLobos} className="w-1/2 mx-auto" alt="logoLobos+" />
        </a>
      </div>
      <div className="flex justify-center p-2">
        <Button variant={'secondary'}>Mas informacion</Button>
      </div>
      <p className='text-center text-2xl font-light text-red-500'>
        Proximamente...a la palma de tu mano
      </p>
      </div>
    </>
  )
}

export default App
