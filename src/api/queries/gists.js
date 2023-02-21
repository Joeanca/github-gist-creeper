import { gql } from 'graphql-request'

export const userGistsWithForks = gql`
  query getUserGistsWithForks($username: String!){
    user(login: $username) {
      gists(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        pageInfo {
          endCursor
          startCursor
        }
        edges {
          node {
            createdAt
            updatedAt
            pushedAt
            url
            id
            description
            name
            files {
              extension
              language {
                id
                name
              }
            }
            forks(last:3){
              totalCount
              edges{
                node{
                  name
                  owner{
                    avatarUrl
                    login
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`