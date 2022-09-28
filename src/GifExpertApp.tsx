import { useState } from "react"
import AddCategory from "./components/AddCategory"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(['TypeScript', 'JavaScript'])

  return (
    <>
    <AddCategory setCategories={ setCategories } />
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
