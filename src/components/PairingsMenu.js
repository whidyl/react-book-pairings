function PairingsMenu({ book }) {
    return <div data-testid="pairings-menu" style={{"backgroundColor": "gray"}}>
        {book.title}
    </div>;
}

export default PairingsMenu;