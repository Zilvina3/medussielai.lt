import React from 'react'
import { Link } from 'react-router-dom';


function WrongPath() {



  return (
    <main className='h-screen bg-black py-52'>
        <section className='container m-auto'>
            <h1 className='text-center lg:text-8xl text-orange-300 max-lg:text-6xl'>Tokio adreso nėra</h1>
            <p className='text-center my-14'><Link className='text-green-400 text-5xl hover:text-green-700' to={'/'}>{'<-'} Grįžti atgal</Link></p>
        </section>
    </main>
  )
}

export default WrongPath;