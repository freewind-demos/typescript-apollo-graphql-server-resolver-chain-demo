import {gql} from 'apollo-server';

const typeDefs = gql`
    type Library {
        branch: String!
        books: [Book!]
    }

    type Book {
        title: String!
        author: Author!
    }

    type Author {
        name: String!
    }

    type Query {
        libraries: [Library]
    }
`;

export default typeDefs;
