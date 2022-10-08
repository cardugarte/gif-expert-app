import { useState } from 'react'

const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }: any) => {
    setInputValue( target.value )
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    const newCategory: string = inputValue.trim()
    if( newCategory.length <= 1 ) return
    onNewCategory(newCategory)
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
