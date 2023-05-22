import { useState, useEffect } from 'react'
import Gifs from './Gifs'

function Fetch({ search }) {
  const [gifs, setGifs] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&limit=10`

    if (search === '') return
    const res = await fetch(url)
    const json = await res.json()
    console.log(json.data)
    setGifs(json.data)
  }

  useEffect(() => {
    getGifs()
  }, [search])
  return (
    <>
      {gifs.map((gif) => (
        <Gifs key={gif.id} gif={gif} />
      ))}
    </>
  )
}
export default Fetch
