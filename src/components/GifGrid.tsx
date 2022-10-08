import { useEffect, useState } from "react";

import GifItem from "./GifItem";

import { getGifs } from "../helpers/getGifs";
import { Gif } from "../interfaces/gif.interface";

const GifGrid = ({ category }: any) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect(() => {
    getImages()
  }, [ ])
  
  return (
    <>
      <h3>{ category }</h3>
      <section className="card-grid">
      {
        images.map( (images: any) => {
          return <GifItem
            key={ images.id }
            { ...images }
          />
        })
      }
      </section>
    </>
  )
}

export default GifGrid
