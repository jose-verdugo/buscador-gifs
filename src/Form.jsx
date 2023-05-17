import { useState } from 'react'
import Fetch from './Fetch'

function Form() {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setValue(e.target.value)
    console.log(search)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviado')
    setSearch(value)
    setValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='buscar'>Inserta una búsqueda: </label>
        <input
          onChange={handleSearch}
          value={value}
          type='text'
          placeholder='Buscar...'
          id='buscar'
        />
        <button type='submit'>Buscar</button>
      </form>
      <Fetch search={search} />
    </>
  )
}
export default Form
