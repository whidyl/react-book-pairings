function Book({title, id, thumbnailSrc}) {
    return <li data-testid={"book-"+id} key={id}>
        <div>
            {title}
            <img src={thumbnailSrc} alt={title+"-thumbnail"} />
        </div>
    </li>;
}

export default Book;