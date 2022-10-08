import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(['TypeScript'])

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
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
    </>
  )
}
