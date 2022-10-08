
  export const getGifs  = async ( category: any) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8dAKtXnU50P3RRFX2jHzhYuQAXstU7Yx&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    
    const gifs = data.map( (img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs
  }
