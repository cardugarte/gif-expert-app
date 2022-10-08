import { useState } from "react"
import AddCategory from "./components/AddCategory"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(['TypeScript', 'JavaScript'])

  const onAddCategory: any = ( newCategory: string ) => {
    //validación de nombres únicos:
    if ( categories.includes( newCategory )) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
    <AddCategory 
      onNewCategory={ onAddCategory }
    />
      <ol>
        {
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
}
