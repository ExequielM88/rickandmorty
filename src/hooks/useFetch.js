import axios from "axios"
import { useEffect , useState } from "react"

const useFetch = (url) => {
   
  const [state, setState ] = useState() ;
  const [hasError, sethasError] = useState(false);

  useEffect (() => {
    axios.get(url)
      .then(res => {
        setState(res.data)
        sethasError(false)
      })
      .catch(err => {
        console.log(err)
        sethasError(true)
        
      })
  }, [url])

  return [state, hasError];
};

export default useFetch