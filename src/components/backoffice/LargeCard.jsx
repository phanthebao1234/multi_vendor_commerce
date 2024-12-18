import { Layers } from 'lucide-react'
import React from 'react'

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg text-white p-8 shadow-sm flex items-center flex-col gap-2 ${data.className} `}>
        <Layers />
        <h4 className='text-xl'>{data.period}</h4>
        <h2 className='lg:text-3xl text-2xl'>${data.sales}</h2>
    </div>
  )
}
