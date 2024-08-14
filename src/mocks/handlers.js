import { graphql } from "msw";

export const handlers = [
  // Handles a mutation to update user name
  graphql.mutation("UpdateUserInfo", (req, res, ctx) => {
    const { username } = req.variables;
    sessionStorage.setItem("username", username);

    return res(
      ctx.data({
        login: {
          username,
        },
      })
    );
  }),

  // Handles a query to return user name
  graphql.query("GetUserInfo", (req, res, ctx) => {
    const username = sessionStorage.getItem("username");

    return res(
      ctx.data({
        user: {
          username: username,
        },
      })
    );
  }),
];
