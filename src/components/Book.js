function Book({ title, id, thumbnailSrc }) {
  return (
    <div data-testid={"book-" + id}>
      {title}
      <img src={thumbnailSrc} alt={title + "-thumbnail"} />
    </div>
  );
}

export default Book;
