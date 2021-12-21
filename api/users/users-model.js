const db = require("../data/db-config");

function getAllUsers() {
  return db("users");
}

async function getById(user_id) {
  const [user] = await db("users").where("user_id", user_id);
  return user;
}

// function findById(user_id) {
//   return db("users")
//     .join("roles", "users.role_id", "roles.role_id")
//     .select("user_id", "username", "role_name")
//     .where("users.user_id", user_id)
//     .first();
// }

/**
    You will need to join two tables.
    Resolves to the user with the given user_id.

    {
      "user_id": 2,
      "username": "sue",
      "role_name": "instructor"
    }
   */

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
  ]);
  return newUserObject; // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

module.exports = { getAllUsers, getById, insertUser };
