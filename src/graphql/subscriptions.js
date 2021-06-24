/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification($username: String) {
    onCreateUserNotification(username: $username) {
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
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification($username: String) {
    onUpdateUserNotification(username: $username) {
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
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification($username: String) {
    onDeleteUserNotification(username: $username) {
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
export const onCreateAdminNotification = /* GraphQL */ `
  subscription OnCreateAdminNotification($owner: String) {
    onCreateAdminNotification(owner: $owner) {
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
export const onUpdateAdminNotification = /* GraphQL */ `
  subscription OnUpdateAdminNotification($owner: String) {
    onUpdateAdminNotification(owner: $owner) {
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
export const onDeleteAdminNotification = /* GraphQL */ `
  subscription OnDeleteAdminNotification($owner: String) {
    onDeleteAdminNotification(owner: $owner) {
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
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
export const onCreateBookItem = /* GraphQL */ `
  subscription OnCreateBookItem {
    onCreateBookItem {
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
export const onUpdateBookItem = /* GraphQL */ `
  subscription OnUpdateBookItem {
    onUpdateBookItem {
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
export const onDeleteBookItem = /* GraphQL */ `
  subscription OnDeleteBookItem {
    onDeleteBookItem {
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
export const onCreateRack = /* GraphQL */ `
  subscription OnCreateRack {
    onCreateRack {
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
export const onUpdateRack = /* GraphQL */ `
  subscription OnUpdateRack {
    onUpdateRack {
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
export const onDeleteRack = /* GraphQL */ `
  subscription OnDeleteRack {
    onDeleteRack {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateBarcode = /* GraphQL */ `
  subscription OnCreateBarcode {
    onCreateBarcode {
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
export const onUpdateBarcode = /* GraphQL */ `
  subscription OnUpdateBarcode {
    onUpdateBarcode {
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
export const onDeleteBarcode = /* GraphQL */ `
  subscription OnDeleteBarcode {
    onDeleteBarcode {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String, $username: String) {
    onCreateTransaction(owner: $owner, username: $username) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String, $username: String) {
    onUpdateTransaction(owner: $owner, username: $username) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String, $username: String) {
    onDeleteTransaction(owner: $owner, username: $username) {
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
export const onCreateBookAuthor = /* GraphQL */ `
  subscription OnCreateBookAuthor {
    onCreateBookAuthor {
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
export const onUpdateBookAuthor = /* GraphQL */ `
  subscription OnUpdateBookAuthor {
    onUpdateBookAuthor {
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
export const onDeleteBookAuthor = /* GraphQL */ `
  subscription OnDeleteBookAuthor {
    onDeleteBookAuthor {
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
