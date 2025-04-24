import React from 'react'
import Hero from '@/components/main/Hero'
import Encryption from '@/components/main/Encryption'
import Projects from "@/components/main/Projects";

const page = () => {
  return (
  <main className="h-full w-full">
    <div className='flex flex-col h-[850px] gap 20'>
      <Hero/>
      <Encryption/>
      <Projects/>
      
    </div>

  </main>
  )
}

export default page
