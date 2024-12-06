
import React from 'react'

export default function SmallCard({data}) {
  const { title, number, iconbg, icon: Icon} = data
  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
       <div className="flex space-x-3 gap-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconbg}`}>
            <Icon className='' size='32'/>
        </div>
        <div className="flex flex-col">
            <p>{title}</p>
            <h3 className='text-2xl font-bold'>{number}</h3>
        </div>
       </div>
    </div>
  )
}
