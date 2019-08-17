// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateSpot = `subscription OnCreateSpot {
  onCreateSpot {
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
export const onUpdateSpot = `subscription OnUpdateSpot {
  onUpdateSpot {
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
export const onDeleteSpot = `subscription OnDeleteSpot {
  onDeleteSpot {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateReview = `subscription OnCreateReview {
  onCreateReview {
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
export const onUpdateReview = `subscription OnUpdateReview {
  onUpdateReview {
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
export const onDeleteReview = `subscription OnDeleteReview {
  onDeleteReview {
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
