import { prettyDOM, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';
import BookList from './components/BookList.js'
import fetchMock from 'jest-fetch-mock';
import { GOOGLE_BOOKS_SINGLE_TEST_BOOK } from './test/mocks.js'
import BookCard, { Book } from './components/BookCard';
import { act } from 'react-dom/test-utils';

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
  
    it('Renders pairings menu with book data after book is clicked, then closes when close is clicked.', async () => {
      await setup();
      let pairingsMenu;
      
      act(() => {book.click();});
      await waitFor(() => {
        pairingsMenu = screen.getByTestId("pairings-menu");
      })

      expect(pairingsMenu).toBeInTheDocument();
      expect(within(pairingsMenu).getByText("Test Book")).toBeInTheDocument();
      expect(screen.getByTestId("selected-book-img")).toBeInTheDocument();
      
      let closeBtn;

      closeBtn = screen.getByTestId("close-pairings-button")
      act(() => {closeBtn.click()});

      await waitFor(() => {
        expect(screen.queryByTestId("pairings-menu")).toBeNull();
      })
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
      render(<BookCard book={new Book("Test Book", 1, "test.jpg")}/>);

      const img = within(screen.getByTestId("book-1")).getByRole("img");

      expect(img).toBeInTheDocument();
    })
  })
})