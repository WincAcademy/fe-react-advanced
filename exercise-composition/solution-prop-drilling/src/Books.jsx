import { Category } from "./Category";

export const Books = ({ books, borrowBook, returnBook }) => {
  return (
    <>
      <h2>Books:</h2>
      <Category
        title="Programming"
        books={books.filter((book) => book.category === "programming")}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </>
  );
};
