import gql from 'graphql-tag';

export const GET_ISSUES = gql`
  query getIssues {
    issues {
      _id
      title
      ticketKey
      createdBy
      assignedTo
      priority
      issueType
      status
      createdAt
    }
  }
`;
