

const GifItem = ({title, url}: any) => {
  return (
    <>
      <article className="card">
        <img src={ url } alt={ title } />
        <h5>{ title }</h5>
      </article>
    </>
  )
}

export default GifItem
