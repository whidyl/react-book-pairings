import { render, screen, waitFor, within } from '@testing-library/react';
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

  it('Fetches a book', async () => {
    fetch.mockResponse(JSON.stringify({
      items: [
        {
          id: 1,
          volumeInfo: {title: "Test Book"}
        }
      ]
    }));
  
    render(<BookList />);

    await waitFor(() => {
      const book = screen.getByTestId("book-1");
      expect(book).toBeInTheDocument();
    })
  })

  describe('Book', () => {
    it('Shows image', () => {
      render(<Book title="Test Book" thumbnailSrc="test.jpg" id="1"/>);

      const img = within(screen.getByTestId("book-1")).getByRole("img");

      expect(img).toBeInTheDocument();
    })
  })
})