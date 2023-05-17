function Gifs({ gif }) {
  return (
    <div>
      <img src={gif.images.downsized_medium.url} alt='Gif' />
    </div>
  )
}
export default Gifs
