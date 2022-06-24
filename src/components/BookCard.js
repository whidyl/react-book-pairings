export class Book {
  constructor(title, id, thumbnailSrc) {
    this.title = title;
    this.id = id;
    this.thumbnailSrc = thumbnailSrc;
  }
}

export function makeBookFromGBApiItem(item) {
  const thumbnailSrc = item.volumeInfo.imageLinks.smallThumbnail /*item.volumeInfo.imageLinks
    ? item.volumeInfo.imageLinks.smallThumbnail
    : null;*/
  return new Book(
    item.volumeInfo.title,
    item.id,
    thumbnailSrc
  );
}

function BookCard({ book, selectBook }) {
  return (
    <div data-testid={"book-" + book.id} onClick={() => selectBook(book)}>
      {book.title}
      <img src={book.thumbnailSrc} alt={book.title + "-thumbnail"} />
    </div>
  );
}

export default BookCard;
