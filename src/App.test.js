import { prettyDOM, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import BookList from './components/BookList.js'
import fetchMock from 'jest-fetch-mock';
import { GOOGLE_BOOKS_SINGLE_TEST_BOOK } from './test/mocks.js'
import Book from './components/Book';

fetchMock.enableMocks();

describe('App', () => {
  describe('Single test book fetched', () => {
    beforeEach(async () => {
      fetch.resetMocks();
    });

    let book;

    const setup = async () => {
      fetch.mockResponse(GOOGLE_BOOKS_SINGLE_TEST_BOOK);
      render(<App />);
      await waitFor(() => {
        book = screen.getByTestId("book-1");
      })
    }
  
    it('Renders pairings menu after book is clicked', async () => {
      await setup();
      
      book.click();
      let pairingsMenu;
      await waitFor(() => {
        pairingsMenu = screen.getByTestId("pairings-menu");
      })
  
      expect(pairingsMenu).toBeInTheDocument();
    })

    it('Does not render pairings menu before book is clicked', async () => {
      await setup();
      
      const pairingsMenu = screen.queryByTestId("pairings-menu");
      
      expect(pairingsMenu).toBeNull();
    })
  })
})

describe('BookList', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Renders a book from fetch', async () => {
    fetch.mockResponse(GOOGLE_BOOKS_SINGLE_TEST_BOOK);
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
  })
})