/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImageData = /* GraphQL */ `
  query GetImageData($id: ID!) {
    getImageData(id: $id) {
      id
      imageUrl
      labels
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listImageData = /* GraphQL */ `
  query ListImageData(
    $filter: ModelImageDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        labels
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
