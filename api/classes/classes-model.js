const db = require("../data/db-config");

const getAll = () => {
  return db("classes");
};

const getById = (id) => {
  return db("classes").where("class_id", id).first();
};

const create = async (classes) => {
  const [id] = await db("classes").insert(classes);
  return getById(id);
};

const updateById = async (id, classes) => {
  await db("classes").where("class_id", id).update(classes);
  return getById(id);
};

// async function getClientClasses(user_id) {
//   const classes = await db("users as u")
//     .select("u.user_id", "u.username", "c.*")
//     .leftJoin("classes_clients as cc", "cc.client_id", "u.user_id")
//     .join("classes as c", "c.class_id", "cc.class_id")
//     .where("user_id", user_id);

//   return classes;
// }

const deleteById = (id) => {
  return db("classes").where("class_id", id).del();
};
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  // getClientClasses,
};
