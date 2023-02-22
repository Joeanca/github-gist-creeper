export interface GithubUserWGists {
  user?: {
    avatarUrl: string,
    id: string,
    bio: string,
    login: string,
    gists: {
      totalCount: number,
      pageInfo: {
        endCursor: string,
        startCursor: string,
      },
      edges: GistNode[],
    },
  },
}

export interface GistNode {
  node: {
    createdAt: string,
    updatedAt: string,
    pushedAt: string,
    url:string,
    id: string,
    description: string,
    name: string,
    files: File[],
    forks: Fork,
  }
}

export interface Fork {
  totalCount: number,
  edges: [
    {
      node: ForkNode
    }
  ]
}

export interface ForkNode {
  name: string,
  id: string,
  url: string,
  createdAt: string,
  owner: {
    avatarUrl: string,
    login: string,
  }
}

export interface File {
  extension:string,
  language: FileLanguage,
}

export interface FileLanguage {
  id: string,
  name: string,
}
