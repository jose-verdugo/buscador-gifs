function Gifs({ gif }) {
  return (
    <div>
      <img src={gif.images.fixed_width.url} alt={gif.title} />
    </div>
  )
}
export default Gifs
