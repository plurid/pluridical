import gql from 'graphql-tag';



export const CURRENT_OWNER = gql`
    query CurrentOwner {
        currentOwner {
            status
            data {
                identonym
            }
        }
    }
`;
