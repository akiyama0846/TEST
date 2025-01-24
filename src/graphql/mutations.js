/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImageData = /* GraphQL */ `
  mutation CreateImageData(
    $input: CreateImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    createImageData(input: $input, condition: $condition) {
      id
      imageUrl
      labels
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateImageData = /* GraphQL */ `
  mutation UpdateImageData(
    $input: UpdateImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    updateImageData(input: $input, condition: $condition) {
      id
      imageUrl
      labels
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteImageData = /* GraphQL */ `
  mutation DeleteImageData(
    $input: DeleteImageDataInput!
    $condition: ModelImageDataConditionInput
  ) {
    deleteImageData(input: $input, condition: $condition) {
      id
      imageUrl
      labels
      createdAt
      updatedAt
      __typename
    }
  }
`;
