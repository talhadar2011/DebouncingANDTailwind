
import { useState } from 'react';
import './App.css'
import CharaterCard from './components/CharaterCard'
import { usegetAllCharater } from './Services/queries'
import  DebonceHook  from './hook/Debouncehook';
function App() {
  const [name, setName] = useState("");
  const [calls, setCalls] = useState(0);
  const debouncedValue = DebonceHook(name);

  const AllCharaters=usegetAllCharater(debouncedValue,setCalls)

  console.log(AllCharaters.data)
  return (
    <>
    <div className='flex gap-14 m-10'>
        <h1 className='text-3xl'>Seach Charater</h1>
        
        <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        } 
         className=' bg-gray-200 scheme-light-dark border-y-zinc-900 rounded-2xl w-4xl h-9 p-3' placeholder='SearchQuery' type='text'/>  
    </div>
    {/* <p>Name: {name}</p> */}
    <div className='flex  m-10'>
        <h1 className='text-3xl'>API Trriggered:{calls}</h1>
    </div>
    <div className='flex flex-wrap ml-8'>
    
    {
      AllCharaters.data?.map((charater)=>(
      <CharaterCard key={charater.id} data={charater}/>

      ))
    }
    </div>
  </>
  )
}

export default App
