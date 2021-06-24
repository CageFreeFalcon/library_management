/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      title
      subtitle
      content
      username
      status
      createdAt
      updatedAt
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subtitle
        content
        username
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdminNotification = /* GraphQL */ `
  query GetAdminNotification($id: ID!) {
    getAdminNotification(id: $id) {
      id
      title
      subtitle
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAdminNotifications = /* GraphQL */ `
  query ListAdminNotifications(
    $filter: ModelAdminNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subtitle
        content
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      subject
      publisher
      language
      edition
      copies_present
      copies_issued
      createdAt
      updatedAt
      BookItems {
        items {
          id
          status
          rackID
          bookID
          createdAt
          updatedAt
        }
        nextToken
      }
      Authors {
        items {
          id
          bookID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
        BookItems {
          nextToken
        }
        Authors {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const searchBook = /* GraphQL */ `
  query SearchBook(
    $filter: SearchableBookFilterInput
    $sort: SearchableBookSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBook(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
        BookItems {
          nextToken
        }
        Authors {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
export const getBookItem = /* GraphQL */ `
  query GetBookItem($id: ID!) {
    getBookItem(id: $id) {
      id
      status
      rackID
      bookID
      createdAt
      updatedAt
      Transactions {
        items {
          id
          Username
          due_date
          fine
          status
          bookitemID
          createdAt
          updatedAt
          owner
          username
        }
        nextToken
      }
    }
  }
`;
export const listBookItems = /* GraphQL */ `
  query ListBookItems(
    $filter: ModelBookItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
        Transactions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRack = /* GraphQL */ `
  query GetRack($id: ID!) {
    getRack(id: $id) {
      id
      name
      createdAt
      updatedAt
      BookItems {
        items {
          id
          status
          rackID
          bookID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listRacks = /* GraphQL */ `
  query ListRacks(
    $filter: ModelRackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        BookItems {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      createdAt
      updatedAt
      books {
        items {
          id
          bookID
          authorID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        books {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const searchAuthor = /* GraphQL */ `
  query SearchAuthor(
    $filter: SearchableAuthorFilterInput
    $sort: SearchableAuthorSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchAuthor(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        books {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
export const getBarcode = /* GraphQL */ `
  query GetBarcode($id: ID!) {
    getBarcode(id: $id) {
      id
      status
      bookItemID
      createdAt
      updatedAt
      book {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
        Transactions {
          nextToken
        }
      }
    }
  }
`;
export const listBarcodes = /* GraphQL */ `
  query ListBarcodes(
    $filter: ModelBarcodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBarcodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        bookItemID
        createdAt
        updatedAt
        book {
          id
          status
          rackID
          bookID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      Username
      due_date
      fine
      status
      bookitemID
      createdAt
      updatedAt
      owner
      username
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Username
        due_date
        fine
        status
        bookitemID
        createdAt
        updatedAt
        owner
        username
      }
      nextToken
    }
  }
`;
export const getBookAuthor = /* GraphQL */ `
  query GetBookAuthor($id: ID!) {
    getBookAuthor(id: $id) {
      id
      bookID
      authorID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
        BookItems {
          nextToken
        }
        Authors {
          nextToken
        }
      }
      author {
        id
        name
        createdAt
        updatedAt
        books {
          nextToken
        }
      }
    }
  }
`;
export const listBookAuthors = /* GraphQL */ `
  query ListBookAuthors(
    $filter: ModelBookAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookID
        authorID
        createdAt
        updatedAt
        book {
          id
          title
          subject
          publisher
          language
          edition
          copies_present
          copies_issued
          createdAt
          updatedAt
        }
        author {
          id
          name
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
