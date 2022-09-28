import { useState } from 'react'

const AddCategory = ({ setCategories }: any) => {
  const [inputValue, setInputValue] = useState('Next')
  const onInputChange = ({ target }: any) => {
    setInputValue( target.value )
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1 ) return
    setCategories ( (categories: string[]) => [ inputValue, ...categories])
    setInputValue('')
  }
  

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

export default AddCategory
