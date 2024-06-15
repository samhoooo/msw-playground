import { graphql } from 'msw'

export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables
    sessionStorage.setItem('is-authenticated', username)

    return res(
      ctx.data({
        login: {
          username,
        },
      }),
    )
  }),

  // Handles a "GetUserInfo" query
  graphql.query('GetUserInfo', (req, res, ctx) => {
    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: 'samhoooo',
          firstName: 'Sam',
        },
      }),
    )
  }),
]