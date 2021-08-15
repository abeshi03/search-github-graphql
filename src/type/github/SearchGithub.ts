export type SearchGithubData = {
  data?: {
    search?: Search;
  }
}

export type Search = {
  repositoryCount?: number;
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
  }
  edges: Array<Edges>
}

export type Edges = {
  cursor?: string;
  node: Node;
}

export type Node = {
  id: string;
  name: string;
  url: string;
  stargazers?: {
    totalCount: number;
  }
  viewerHasStarred: number;
}
//
//
// export type Test = {
//   search?: {
//     repositoryCount: number;
//     pageInfo: {
//       endCursor: string;
//       hasNextPage: boolean;
//       hasPreviousPage: boolean;
//       startCursor: string;
//     }
//     edges: [
//       {
//         cursor: string;
//         node: {
//           id: string;
//           name: string;
//           url: string;
//           stargazers: {
//             totalCount: number;
//           }
//           viewerHasStarred: boolean;
//         }
//       }
//     ]
//   }
// }
