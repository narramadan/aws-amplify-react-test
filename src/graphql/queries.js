// eslint-disable
// this is an auto generated file. This will be overwritten

export const postsUnderBlog = `query PostsUnderBlog($blogId: ID!, $limit: Int, $nextToken: String) {
  postsUnderBlog(blogId: $blogId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const commentsUnderPost = `query CommentsUnderPost($postId: ID!, $limit: Int, $nextToken: String) {
  commentsUnderPost(postId: $postId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
      }
    }
    nextToken
  }
}
`;
export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      items {
        id
        title
      }
      nextToken
    }
    category
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
      category
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    blog {
      id
      name
      posts {
        nextToken
      }
      category
    }
    comments {
      items {
        id
        content
      }
      nextToken
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
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      title
      blog {
        id
        name
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        title
      }
    }
    nextToken
  }
}
`;
