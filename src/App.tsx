
import './App.css'
import CharaterCard from './components/CharaterCard'
import { usegetAllCharater } from './Services/queries'

function App() {
  const AllCharaters=usegetAllCharater()
  if(AllCharaters.isLoading){
    return <h1>DATA LOADING...</h1>
  }
  if(AllCharaters.error){
    return <h1>ERROR IN DATA FETCHING:</h1>
  }
  console.log(AllCharaters.data)
  return (
    <div className='flex flex-wrap ml-8'>
    
    {
      AllCharaters.data?.map((charater)=>(
      <CharaterCard key={charater.id} data={charater}/>

      ))
    }
    </div>
  )
}

export default App
