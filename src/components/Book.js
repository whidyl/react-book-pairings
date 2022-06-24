function Book({ title, id, thumbnailSrc, openPairings }) {
  return (
    <div data-testid={"book-" + id} onClick={openPairings}>
      {title}
      <img src={thumbnailSrc} alt={title + "-thumbnail"} />
    </div>
  );
}

export default Book;
