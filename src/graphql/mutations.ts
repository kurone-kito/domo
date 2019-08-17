// tslint:disable
// this is an auto generated file. This will be overwritten

export const createSpot = `mutation CreateSpot($input: CreateSpotInput!) {
  createSpot(input: $input) {
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
export const updateSpot = `mutation UpdateSpot($input: UpdateSpotInput!) {
  updateSpot(input: $input) {
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
export const deleteSpot = `mutation DeleteSpot($input: DeleteSpotInput!) {
  deleteSpot(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createReview = `mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
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
export const updateReview = `mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input) {
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
export const deleteReview = `mutation DeleteReview($input: DeleteReviewInput!) {
  deleteReview(input: $input) {
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
