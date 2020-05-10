import {IResolvers} from 'graphql-tools';
import {Book, books, libraries, Library} from './data';

const resolvers: IResolvers = {
  Query: {
    libraries() {
      return libraries;
    }
  },
  Library: {
    books(parent: Library) {
      console.log("### books.parent", parent);
      return books.filter(book => book.branch === parent.branch);
    }
  },
  Book: {
    author(parent: Book) {
      console.log("### author.parent", parent);
      return {
        name: parent.author
      };
    }
  }
};

export default resolvers;
