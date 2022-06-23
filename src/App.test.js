import { prettyDOM, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import BookList from './components/BookList.js'
import fetchMock from 'jest-fetch-mock';
import GOOGLE_BOOK from './test/mocks.js'
import Book from './components/Book';

fetchMock.enableMocks();

describe('BookList', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Renders a book from fetch', async () => {
    fetch.mockResponse(JSON.stringify({
      items: [
        {
          id: 1,
          volumeInfo: {title: "Test Book", imageLinks:{smallThumbnail: "test.jpg"}}
        }
      ]
    }));
  
    render(<BookList />);

    let book;
    await waitFor(() => {
      book = screen.getByTestId("book-1");
    })

    expect(book).toBeInTheDocument();
    expect(within(book).getByText("Test Book")).toBeInTheDocument();
    expect(within(book).getByRole("img")).toBeInTheDocument();
  })

  describe('Book', () => {
    it('Shows image', () => {
      render(<Book title="Test Book" thumbnailSrc="test.jpg" id="1"/>);

      const img = within(screen.getByTestId("book-1")).getByRole("img");

      expect(img).toBeInTheDocument();
    })

    // it('Shows pairings menu on click', async () => {
    //   render(<Book title="Test Book" thumbnailSrc="test.jpg" id="1"/>);

    //   const book = screen.getByTestId("book-1");
    //   book.click();
    //   let pairingsMenu;
    //   await waitFor(() => {
    //     pairingsMenu = screen.getByTestId("pairings-menu");
    //   })

    //   expect(pairingsMenu).toBeInTheDocument();
    // })
  })
})