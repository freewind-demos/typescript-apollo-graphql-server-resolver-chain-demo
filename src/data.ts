export type Book = {
  title: string,
  author: string,
  branch: string
}

export type Library = {
  branch: string
}

export const libraries: Library[] = [
  {
    'branch': 'downtown'
  },
  {
    'branch': 'riverside'
  },
];

// The branch field of a book indicates which library has it in stock
export const books: Book[] = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    branch: 'riverside'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    branch: 'downtown'
  },
];
