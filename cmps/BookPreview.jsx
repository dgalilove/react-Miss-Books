
export function BookPreview({ book }) {

  const { title, listPrice } = book
  return (
    <article className="book-preview">
      <h2>Book Title: {title}</h2>
      <h4>Book Price: {listPrice}</h4>
    </article>
  )
}