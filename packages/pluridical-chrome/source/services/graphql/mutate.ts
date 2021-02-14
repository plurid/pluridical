import gql from 'graphql-tag';



export const LOGIN_BY_IDENTONYM = gql`
    mutation LoginByIdentonym($input: InputLoginByIdentonym!) {
        loginByIdentonym(input: $input) {
            status
            data {
                owner {
                    id
                    identonym
                }
                tokens {
                    access
                    refresh
                }
            }
            errors {
                path
                message
                type
            }
        }
    }
`;


export const LOGIN_BY_EMAIL = gql`
    mutation LoginByEmail($input: InputLoginByEmail!) {
        loginByEmail(input: $input) {
            status
            data {
                owner {
                    id
                    identonym
                }
                tokens {
                    access
                    refresh
                }
            }
            errors {
                path
                message
                type
            }
        }
    }
`;


export const LOGOUT = gql`
    mutation {
        logout {
            status
        }
    }
`;
