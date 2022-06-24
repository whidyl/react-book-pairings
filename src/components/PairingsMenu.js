function PairingsMenu({ book, close }) {
  return (
    <div data-testid="pairings-menu" style={{ backgroundColor: "gray" }}>
      <img
        src={book.thumbnailSrc}
        alt={book.title + "-cover"}
        data-testid={"selected-book-img"}
      />
      <button data-testid="close-pairings-button" onClick={close}>close</button>
      {book.title}
    </div>
  );
}

export default PairingsMenu;
