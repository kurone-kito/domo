// tslint:disable
// this is an auto generated file. This will be overwritten

export const getSpot = `query GetSpot($id: ID!) {
  getSpot(id: $id) {
    id
    name
    lat
    lng
    posts {
      items {
        id
        title
        detail
      }
      nextToken
    }
    reviews {
      items {
        id
        rate
        content
      }
      nextToken
    }
  }
}
`;
export const listSpots = `query ListSpots(
  $filter: ModelSpotFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      lat
      lng
      posts {
        nextToken
      }
      reviews {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    detail
    spot {
      id
      name
      lat
      lng
      posts {
        nextToken
      }
      reviews {
        nextToken
      }
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      detail
      spot {
        id
        name
        lat
        lng
      }
    }
    nextToken
  }
}
`;
export const getReview = `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    rate
    content
    spot {
      id
      name
      lat
      lng
      posts {
        nextToken
      }
      reviews {
        nextToken
      }
    }
  }
}
`;
export const listReviews = `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rate
      content
      spot {
        id
        name
        lat
        lng
      }
    }
    nextToken
  }
}
`;
