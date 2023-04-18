import {useRef, useState} from "react"
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainConten from "./components/MainConten"



const App = () => {
  
  const [inputValue, setinputvalue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)
  
  const inputLocation = useRef()

  const handleSubmit = event => {
    event.preventDefault()

   setinputvalue(inputLocation.current.value)
  }

  return (
    <div className="App">
      <header className="header_img"></header>
      <form onSubmit={handleSubmit} className="App__form">
        <input className="App__input" ref={inputLocation} type="text"  />
        <button className="App__btn">Search</button>
      </form>
      {
        hasError
        ?<h2 className="App__error">✖️ Hey! you must provide an id from 1 to 126😁</h2>
        :<MainConten location={location}/>
        
      }
    </div>
  )
}

export default App
