exports.seed = async function (knex) {
  // await knex("users").truncate();
  // await knex("roles").truncate();
  await knex("roles").insert([
    { role_name: "client" },
    { role_name: "instructor" },
  ]);
  await knex("users").insert([
    {
      username: "Priscila",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 1,
    },
    {
      username: "Sue",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 2,
    },
    {
      username: "Robert",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 1,
    },
    {
      username: "Peggy",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 1,
    },
    {
      username: "Joanna",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 1,
    },
    {
      username: "Anna",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 2,
    },
    {
      username: "Leo",
      password: "$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq", // password "1234"
      role_id: 2,
    },
  ]);
};
