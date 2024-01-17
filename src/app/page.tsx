import Image from 'next/image'
import { newData } from './data/data'

export default function Home() {
  
  return (
   <div className='flex flex-col mx-20 '>
    <div className='flex flex-col mx-10 border-2 border-purple-700'>
    <div>
       <div className='flex items-center '>
      <img src={newData.author.avatar} alt=""  className='w-10 h-8'/>
     {newData.author.name}
    </div>
    <div className='flex pl-10 my-4'>
      <p>{newData.text}</p>
    </div>
    <div className='flex flex-col'> 
      <div className='flex items-center mx-10'>
      <img src={newData.author.avatar} alt=""  className='w-10 h-8'/>
      {newData.author.name}
    </div>
    <div className='flex pl-10 my-4 mx-14'>
      <p>{newData.text}</p>
    </div>
    </div><div className='flex flex-col'> 
      <div className='flex items-center mx-10'>
      <img src={newData.author.avatar} alt=""  className='w-10 h-8'/>
      {newData.author.name}
    </div>
    <div className='flex pl-10 my-4 mx-14'>
      <p>{newData.text}</p>
    </div>
    </div><div className='flex flex-col'> 
      <div className='flex items-center mx-10'>
      <img src={newData.author.avatar} alt=""  className='w-10 h-8'/>
      {newData.author.name}
    </div>
    <div className='flex pl-10 my-4 mx-14'>
      <p>{newData.text}</p>
    </div>
    </div>
    <div className='flex flex-col'> 
      <div className='flex items-center mx-10'>
      <img src={newData.author.avatar} alt=""  className='w-10 h-8'/>
      {newData.author.name}
    </div>
    <div className='flex pl-10 my-4 mx-14'>
      <p>{newData.text}</p>
    </div>
    </div>
   
    </div>
    </div>
   
   
   </div>
  )
}
